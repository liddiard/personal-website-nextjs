'use client'

import Link from 'next/link'

const Footer = () => (
  <footer className="clear-both float-right m-8 max-w-[440px] text-right text-[0.8rem] opacity-50">
    Content © {new Date().getFullYear()} Harrison Liddiard. All rights reserved.
    Product names, logos, and brands are property of their respective owners.{' '}
    <Link href="/credits">Background image credits</Link>.
  </footer>
)

export default Footer
