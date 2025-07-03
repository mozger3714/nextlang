// app/blog/[slug]/page.tsx
import { getPost } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage
        ? [{ url: post.coverImage, width: 1200, height: 630 }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug)
  if (!post) return notFound()

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(post.date).toLocaleDateString()}
      </p>
      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={`Cover image for ${post.title}`}
          width={1200}
          height={630}
          className="rounded-xl mb-6 w-full h-auto object-cover"
        />
      )}
      <div
        className="prose prose-neutral max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 text-sm text-gray-600">
          Tags:{' '}
          {post.tags.map((tag: string) => (
            <span key={tag} className="mr-2">
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            image: post.coverImage
              ? [`https://yourdomain.com${post.coverImage}`]
              : [],
            author: {
              '@type': 'Person',
              name: 'SpeakLab Academy',
            },
            publisher: {
              '@type': 'Organization',
              name: 'SpeakLab Academy',
              logo: {
                '@type': 'ImageObject',
                url: 'https://yourdomain.com/logo.png',
              },
            },
            datePublished: post.date,
            description: post.excerpt,
          }),
        }}
      />
    </article>
  )
}
