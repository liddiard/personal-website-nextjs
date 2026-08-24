import Link from 'next/link'
import Layout from '@/components/layout'
import skillsJson from '@/data/skills.json'
import interestsJson from '@/data/interests.json'
import { getAllProjects } from '@/lib/projects'

const skills = skillsJson as string[]
const interests = interestsJson as Array<{ name: string }>

const Skills = ({ data }: { data: string[] }) => (
  <ul className="skills">
    {data.map((skill) => (
      <li key={skill}>{skill}</li>
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
      <section className="intro">
        <div className="flex flex-col gap-4">
          <h1 className="name highlight">Harrison Liddiard</h1>
          <p className="tagline">
            Product manager, design & aviation enthusiast
          </p>
        </div>
        <div className="lede">
          <p className="mt-3">
            Hi! I’m Harrison, a technical product manager at{' '}
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              PayPal
            </a>{' '}
            with a software engineering background.
          </p>
          <p>
            Check out my <a href="#projects">projects</a> below and my{' '}
            <Link href="/resume">resumé</Link> for some things I’ve done. You
            can also find me on{' '}
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
        </div>
      </section>
      <section className="interests-section">
        <div>
          <h2 className="highlight">Skills & Interests</h2>
          <p className="text-balance">
            Here are some things I’m decent at and enjoy doing:
          </p>
          <Skills data={skills} />
        </div>
        <div>
          <h2 className="highlight">Industries</h2>
          <p className="text-balance">
            I’m particularly interested in solving problems in these areas:
          </p>
          <Interests data={interests} />
        </div>
      </section>
      <h2 id="projects" className="highlight">
        Projects
      </h2>
      Here are some things I’ve built over the years:
      <ul className="projects">
        {projects.map((project) => (
          <li key={project.slug}>
            <h3>
              <Link href={`/project/${project.slug}`}>
                {project.frontmatter.title}
              </Link>
            </h3>
            <p>{project.frontmatter.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
