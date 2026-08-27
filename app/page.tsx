import Link from 'next/link'
import Layout from '@/components/layout'
import skillsJson from '@/data/skills.json'
import interestsJson from '@/data/interests.json'
import { getAllProjects } from '@/lib/projects'
import styles from './page.module.css'

const skills = skillsJson as string[]
const interests = interestsJson as string[]

const Skills = ({ data }: { data: string[] }) => (
  <ul className={styles.skills}>
    {data.map((skill) => (
      <li key={skill}>{skill}</li>
    ))}
  </ul>
)

const Interests = ({ data }: { data: string[] }) => (
  <ul className={styles.interests}>
    {data.map((interest) => (
      <li key={interest}>{interest}</li>
    ))}
  </ul>
)

export default function Home() {
  const projects = getAllProjects()
    .filter((project) => project.frontmatter.type === 'software')
    .sort((a, b) => b.frontmatter.year - a.frontmatter.year)

  return (
    <Layout page={styles.front}>
      <section className={styles.intro}>
        <div className={styles.introHeading}>
          <h1 className="name highlight">Harrison Liddiard</h1>
          <p className={styles.tagline}>
            Product manager, design & aviation enthusiast
          </p>
        </div>
        <div className={styles.lede}>
          <p>
            Hi! I’m Harrison, a senior product manager at{' '}
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
            Check out my <a href="#projects">projects</a> and{' '}
            <Link href="/resume">resumé</Link> for an overview of my work. You
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
      <section className={styles.interestsSection}>
        <div>
          <h2 className="highlight">Skills & Interests</h2>
          <p className={styles.sectionIntro}>
            Here are some things I’m experienced with and enjoy doing:
          </p>
          <Skills data={skills} />
        </div>
        <div>
          <h2 className="highlight">Industries</h2>
          <p className={styles.sectionIntro}>
            I’m particularly interested in solving problems in these areas:
          </p>
          <Interests data={interests} />
        </div>
      </section>
      <h2 id="projects" className="highlight">
        Projects
      </h2>
      <p className={styles.sectionIntro}>
        A selection of things I’ve built over the years:
      </p>
      <ul className={styles.projects}>
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
