import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/blog-content/posts')

export async function getPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    coverImage: data.coverImage || null,
    tags: data.tags || [],
    contentHtml,
  }
}

export function getAllSlugs(): string[] {
  return fs.readdirSync(postsDirectory).map((file) => file.replace(/\.md$/, ''))
}
