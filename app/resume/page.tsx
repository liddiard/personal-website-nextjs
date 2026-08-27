import type { Metadata } from 'next'
import Layout from '@/components/layout'
import PrintButton from '@/components/print-button'
import { oxygen } from '@/lib/fonts'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Resumé',
  description:
    'Harrison Liddiard’s resumé, including PayPal, The New York Times, hackNY, UCLA Daily Bruin, and UCLA Athletics.',
}

export default function Resume() {
  return (
    <Layout page={styles.resume} className={oxygen.variable}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Resumé</h1>
        <PrintButton />
      </div>
      <header className={styles.printHeader}>
        <h1>Harrison Liddiard</h1>
        <ul className={styles.contact}>
          <li>
            <img src="/img/email.svg" alt="email" />
            harrison@liddiard.com
          </li>
          <li>
            <img src="/img/phone.svg" alt="phone number" />
            (480) 382-0676
          </li>
          <li>
            <img src="/img/cursor.svg" alt="website" />
            <a href="https://harrisonliddiard.com">harrisonliddiard.com</a>
          </li>
          <li>
            <img src="/img/linkedin.svg" alt="linkedin" />
            <a href="https://linkedin.com/in/liddiard">/liddiard</a>
          </li>
        </ul>
      </header>
      <section className={`${styles.col} ${styles.left}`}>
        <h2>Work Experience</h2>
        <div className={styles.item}>
          <h3 className={styles.position}>
            Technical Product Manager & Sr. PM{' '}
            <span className={styles.date}>2022 – present</span>
          </h3>
          <h4 className={styles.company}>PayPal</h4>
          <ul>
            <li>
              Launched new merchant onboarding, cutting required signup fields
              by 60% and introducing upfront compliance verification,
              contributing to +$35M ARR.
            </li>
            <li>
              Redesigned personal-to-business account conversion, reducing
              reversals 64% (~$4M/yr support cost savings), and driving 68K
              net-new signups (~$2M/yr incremental revenue).
            </li>
            <li>
              Designed and ran A/B test inverting the onboarding funnel, letting
              users create an invoice before signup, doubling signup and
              activation rates.
            </li>
            <li>
              Building AI-powered payment integration assistant to agentically
              crawl merchant sites, assess tech stacks, and create tailored
              integration guides.
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h3 className={styles.position}>
            Software Engineer 1–3{' '}
            <span className={styles.date}>2017 – 2022</span>
          </h3>
          <h4 className={styles.company}>PayPal</h4>
          <ul>
            <li>
              Led experiment implementations on Node.js + React stack that
              lifted merchant onboarding completion rate and product adoption.
            </li>
            <li>
              Won internal and external hackathons for PayPal, recruited, helped
              plan PayPal’s annual developer conference.
            </li>
            <li>
              Developed software that helped 100s of employees meet each other
              during Covid WFH.
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h3 className={styles.position}>
            Software Engineering Intern{' '}
            <span className={styles.date}>2016</span>
          </h3>
          <h4 className={styles.company}>The New York Times</h4>
          <ul>
            <li>
              Increased CMS search speed 10x w/ Elasticsearch, redesigned UI.
            </li>
            <li>
              Wrote binary search typographic headline balancer that ran on all
              nytimes.com article pages.
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h3 className={styles.position}>
            Web Developer & Designer{' '}
            <span className={styles.date}>2014 – 2017</span>
          </h3>
          <h4 className={styles.company}>UCLA Athletics</h4>
          <ul>
            <li>
              Worked among several departments to prioritize, design, and build
              web applications to support UCLAʼs largest athletic events.
            </li>
            <li>
              Created web style guide, worked with website provider to
              coordinate full site redesign.
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h3 className={styles.position}>
            Managing Editor, Digital{' '}
            <span className={styles.date}>2014 – 2015</span>
          </h3>
          <h4 className={styles.company}>Daily Bruin</h4>
          <ul>
            <li>
              Edited and advised 80+ people in web development, videography,
              podcasting and blogging at UCLA’s student news organization.
            </li>
          </ul>
        </div>
      </section>
      <section className={`${styles.col} ${styles.right}`}>
        <h2>Education</h2>
        <div className={styles.item}>
          <h3 className={styles.school}>
            UCLA <span className={styles.date}>2017</span>
          </h3>
          Computer Science & Linguistics, B.A.
        </div>
        <div className={styles.techSkills}>
          <h2>Skills</h2>
          <h3>Product</h3>
          <p className={styles.item}>
            PRDs, A/B testing, scrum master, cross-functional collaboration,
            prototyping, UX design, data analytics
          </p>
          <h3>Technical</h3>
          <p className={styles.item}>
            Python, JavaScript, SQL, React, HTML/CSS, API design
          </p>
          <h3>Tools</h3>
          <p className={styles.item}>Jira, Figma, Claude Code & Cowork</p>
        </div>
        <h2>Personal Projects</h2>
        <ul className={`${styles.projects} ${styles.item}`}>
          <li>
            <span className={styles.projectName}>TrainTracker</span>:
            live-updating map for North American passenger rail
          </li>
          <li>
            <span className={styles.projectName}>Stream Editor</span>: use
            command-line text manipulation tools interactively on the web
          </li>
          <li>
            <span className={styles.projectName}>Weather/transit board</span>:
            colorful, informative LED fridge magnet using HTML Canvas
          </li>
          <li>
            <span className={styles.projectName}>Slack Meetups</span>: pair
            people in a channel for 1:1s and generate visual reports
          </li>
        </ul>
        <h2>More Skills & Achievements</h2>
        <ul className={`${styles.skills} ${styles.item}`}>
          <li>
            FAA-licensed private aircraft pilot & commercial drone operator
          </li>
          <li>PADI-certified scuba diver</li>
          <li>hackNY fellowship mentor</li>
          <li>Eagle Scout</li>
          <li>Yamaha Music School graduate</li>
        </ul>
      </section>
    </Layout>
  )
}
