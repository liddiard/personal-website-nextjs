import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

const projectsDirectory = path.join(process.cwd(), 'content', 'projects')

export type MediaType = 'image' | 'video'

export interface Media {
  type: MediaType
  filename: string
  caption?: string
}

export interface ProjectFrontmatter {
  title: string
  description: string
  year: number
  involvement?: string
  skills: string
  link?: string
  linkConfirmation?: string
  github?: string
  layout?: 'article'
  type?: string
  media: Media[]
}

export interface Project {
  slug: string
  html: string
  frontmatter: ProjectFrontmatter
}

const markdownToHtml = (markdown: string): string =>
  unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .processSync(markdown)
    .toString()

const readProject = (filename: string): Project => {
  const slug = filename.replace(/\.md$/, '')
  const filePath = path.join(projectsDirectory, filename)
  const { data, content } = matter(fs.readFileSync(filePath, 'utf8'))
  const frontmatter = data as ProjectFrontmatter
  return {
    slug,
    html: markdownToHtml(content),
    frontmatter,
  }
}

let projectsCache: Project[] | null = null

/**
 * Read and parse every project Markdown file in `content/projects`.
 * Results are memoized since the content is static for a given build.
 */
export const getAllProjects = (): Project[] => {
  if (projectsCache) {
    return projectsCache
  }
  const filenames = fs
    .readdirSync(projectsDirectory)
    .filter((filename) => filename.endsWith('.md'))
  projectsCache = filenames.map(readProject)
  return projectsCache
}

export const getProjectBySlug = (slug: string): Project | undefined =>
  getAllProjects().find((project) => project.slug === slug)

/** Absolute-URL path to a project's media file, mirroring Gatsby's `slug + filename`. */
export const getMediaPath = (project: Project, media: Media): string =>
  `/project/${project.slug}/${media.filename}`
