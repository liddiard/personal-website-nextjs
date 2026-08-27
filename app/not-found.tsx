import type { Metadata } from 'next'
import Layout from '@/components/layout'
import styles from './not-found.module.css'

export const metadata: Metadata = {
  title: 'Not Found',
}

export default function NotFound() {
  return (
    <Layout page={styles.notFound}>
      <div className={styles.errorCode}>404</div>
      <h1 className={styles.heading}>Not Found</h1>
      <p className={styles.body}>
        Uh oh! That page doesn’t exist. <br />
        Try a link from the menu above.
      </p>
    </Layout>
  )
}
