// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
// } from '@/components/ui/card'
// import { cn } from '@/lib/utils'
// import { getAllPosts } from '@/lib/posts' // You'll need to implement this

// export default async function BlogPage() {
//   const posts = await getAllPosts() // Sorted by date (newest first)

//   return (
//     <div className="container py-12">
//       <header className="mb-12 text-center">
//         <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
//         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//           Thoughts, tutorials, and insights about [your niche]
//         </p>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {posts.map((post) => (
//           <Card key={post.slug} className="hover:shadow-lg transition-shadow">
//             <a href={`/blog/${post.slug}`} className="block h-full">
//               <CardHeader>
//                 <CardTitle className="text-xl line-clamp-2">
//                   {post.title}
//                 </CardTitle>
//                 <CardDescription className="flex items-center gap-2">
//                   <time dateTime={post.date} className="text-sm">
//                     {new Date(post.date).toLocaleDateString('en-US', {
//                       year: 'numeric',
//                       month: 'long',
//                       day: 'numeric',
//                     })}
//                   </time>
//                   <span>·</span>
//                   <span>{post.readingTime} min read</span>
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground line-clamp-3">
//                   {post.description}
//                 </p>
//               </CardContent>
//             </a>
//           </Card>
//         ))}
//       </div>

//       {posts.length === 0 && (
//         <div className="text-center py-12">
//           <p className="text-muted-foreground">
//             No posts yet. Check back soon!
//           </p>
//         </div>
//       )}
//     </div>
//   )
// }

// import Link from 'next/link'
// import { getAllSlugs, getPost } from '@/lib/markdown'

// export default async function BlogPage() {
//   const slugs = getAllSlugs()
//   const posts = await Promise.all(slugs.map((slug) => getPost(slug)))

//   return (
//     <div className="max-w-2xl mx-auto py-12 px-4">
//       <h1 className="text-3xl font-bold mb-8">Blog</h1>
//       <ul className="space-y-6">
//         {posts.map((post) => (
//           <li key={post.slug}>
//             <Link href={`/blog/${post.slug}`}>
//               <h2 className="text-xl font-semibold hover:underline">
//                 {post.title}
//               </h2>
//               <p className="text-sm text-gray-500">{post.date}</p>
//               <p className="mt-2">{post.excerpt}</p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

import Link from 'next/link'
import { getAllSlugs, getPost } from '@/lib/markdown'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default async function BlogPage() {
  const slugs = getAllSlugs()
  const posts = await Promise.all(slugs.map((slug) => getPost(slug)))

  return (
    <div className="container py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about language learning and IT
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card
            key={post.slug}
            className={cn(
              'hover:shadow-lg transition-all duration-300',
              'group relative overflow-hidden',
              'bg-background/80 backdrop-blur-sm',
              'border border-border/50',
              'hover:shadow-primary/10 hover:border-primary/30'
            )}
          >
            <Link href={`/blog/${post.slug}`} className="block h-full">
              {/* Featured Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={post.coverImage || '/default-blog-image.jpg'}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <CardHeader className="relative z-10">
                <CardTitle className="text-xl line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <time dateTime={post.date} className="text-sm">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span>·</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No posts yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  )
}
