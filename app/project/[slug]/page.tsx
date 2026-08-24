import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Layout from '@/components/layout'
import ProjectLink from '@/components/project-link'
import {
  getAllProjects,
  getMediaPath,
  getProjectBySlug,
  type Media,
  type Project,
} from '@/lib/projects'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  const firstImage = project?.frontmatter.media.find((m) => m.type === 'image')
  const ogImage =
    project && firstImage
      ? `https://harrisonliddiard.com${getMediaPath(project, firstImage)}`
      : undefined
  return {
    title: project?.frontmatter.title,
    description: project?.frontmatter.description,
    openGraph: ogImage ? { images: [ogImage] } : undefined,
  }
}

/** Strip the protocol from a URL and return only host + pathname. */
const prettifyUrl = (url: string): string => {
  try {
    const { host, pathname } = new URL(url)
    return host + (pathname === '/' ? '' : pathname)
  } catch {
    return url
  }
}

const renderMedia = (project: Project, media: Media) => {
  const { filename, type, caption } = media
  const path = getMediaPath(project, media)
  const mediaElement =
    type === 'image' ? (
      <img src={path} alt={caption ?? ''} />
    ) : (
      <video src={path} controls autoPlay muted loop playsInline />
    )
  return (
    <figure key={filename}>
      <a
        title="Open in new window"
        href={path}
        target="_blank"
        rel="noreferrer"
      >
        {mediaElement}
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) {
    notFound()
  }

  const metadata = project.frontmatter
  const { media } = metadata
  const isArticleLayout = metadata.layout === 'article'

  const link = metadata.link && (
    <tr>
      <td>Link</td>
      <td>
        <ProjectLink
          href={metadata.link}
          linkConfirmation={metadata.linkConfirmation}
          className="project-link"
        >
          {prettifyUrl(metadata.link)}
        </ProjectLink>
      </td>
    </tr>
  )

  const github = metadata.github && (
    <tr>
      <td>Code</td>
      <td>
        <a
          href={`https://github.com/${metadata.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {metadata.github}
        </a>
      </td>
    </tr>
  )

  return (
    <Layout page="project" className={isArticleLayout ? 'article-layout' : ''}>
      <article>
        <h1 className="highlight">{metadata.title}</h1>
        <h2>{metadata.description}</h2>
        <table className="project-info">
          <tbody>
            {link}
            <tr>
              <td>Year</td>
              <td>{metadata.year}</td>
            </tr>
            <tr>
              <td>Skills</td>
              <td>{metadata.skills}</td>
            </tr>
            {github}
          </tbody>
        </table>
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </article>
      <aside>{media.map((item) => renderMedia(project, item))}</aside>
    </Layout>
  )
}
