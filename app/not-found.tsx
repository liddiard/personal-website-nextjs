import type { Metadata } from 'next'
import Layout from '@/components/layout'

export const metadata: Metadata = {
  title: 'Not Found',
}

export default function NotFound() {
  return (
    <Layout page="not-found">
      <div className="text-9xl font-thin">404</div>
      <h1 className="text-4xl">Not Found</h1>
      <p className="leading-relaxed">
        Uh oh! That page doesn’t exist. <br />
        Try one of the links from the menu above.
      </p>
    </Layout>
  )
}
