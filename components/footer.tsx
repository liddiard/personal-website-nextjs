'use client'

import Link from 'next/link'
import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.siteFooter}>
    Content © {new Date().getFullYear()} Harrison Liddiard. All rights reserved.
    Product names, logos, and brands are property of their respective owners.{' '}
    <Link href="/credits">Background image credits</Link>.
  </footer>
)

export default Footer
