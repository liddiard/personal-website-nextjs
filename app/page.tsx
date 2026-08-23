import Link from 'next/link'
import Layout from '@/components/layout'
import skillsJson from '@/data/skills.json'
import interestsJson from '@/data/interests.json'
import { getAllProjects } from '@/lib/projects'

interface Skill {
  name: string
  type?: string
}

const skills = skillsJson as Skill[]
const interests = interestsJson as Array<{ name: string }>

const Skills = ({ data }: { data: Skill[] }) => (
  <ul className="skills">
    {data.map((skill) => (
      <li
        key={skill.name}
        className={
          skill.type === 'software' ? 'primary-accent font-semibold' : ''
        }
      >
        {skill.name}
      </li>
    ))}
  </ul>
)

const Interests = ({ data }: { data: Array<{ name: string }> }) => (
  <ul className="interests">
    {data.map((interest) => (
      <li key={interest.name}>{interest.name}</li>
    ))}
  </ul>
)

export default function Home() {
  const projects = getAllProjects()
    .filter((project) => project.frontmatter.type === 'software')
    .sort((a, b) => b.frontmatter.year - a.frontmatter.year)

  return (
    <Layout page="front">
      <header>
        <h1 className="name">Harrison Liddiard</h1>
        <p className="tagline">Product manager, design & aviation enthusiast</p>
      </header>
      <p className="lede">
        Hi! I’m Harrison, a technical product manager at{' '}
        <a
          href="https://www.paypal.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          PayPal
        </a>{' '}
        with a software engineering background. Check out my{' '}
        <a href="#projects">projects</a> below and my{' '}
        <Link href="/resume">resumé</Link> for some things I’ve done. You can
        also find me on{' '}
        <a
          href="https://linkedin.com/in/liddiard"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{' '}
        and{' '}
        <a
          href="https://github.com/liddiard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
      <h2>Skills & Interests</h2>
      <p>
        Here’s some stuff I enjoy learning about and doing. Technical skills are
        in{' '}
        <span className="primary-accent">
          <strong>purple</strong>
        </span>
        :
      </p>
      <Skills data={skills} />
      <h2>Industries</h2>
      <p>I’m particularly interested in these areas of work:</p>
      <Interests data={interests} />
      <h2 id="projects">Projects</h2>
      Some things I’ve made – most recent first:
      <ul className="projects">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/project/${project.slug}`}>
              {project.frontmatter.title}
            </Link>
            : {project.frontmatter.description}
          </li>
        ))}
      </ul>
    </Layout>
  )
}
