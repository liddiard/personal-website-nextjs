import type { Metadata } from 'next'
import Layout from '@/components/layout'
import creditsJson from '@/data/credits.json'

interface Credit {
  name: string
  license: string
  link: string
}

const credits = creditsJson as Credit[]

export const metadata: Metadata = {
  title: 'Credits',
}

export default function Credits() {
  return (
    <Layout page="credits">
      <h1>Background Image Credits</h1>
      <p>
        From top to bottom, left to right. All works have been modified by me.
      </p>
      <ul>
        {credits.map((credit) => (
          <li key={credit.name}>
            <a href={credit.link}>{credit.name}</a>{' '}
            <span className="license">({credit.license})</span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
