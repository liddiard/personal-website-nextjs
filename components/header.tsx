import Link from 'next/link'
import navLinksJson from '@/data/navLinks.json'
import styles from './header.module.css'

interface NavLink {
  url: string
  text: string
  external: boolean
}

const navLinks = navLinksJson as NavLink[]

const Header = () => (
  <nav className={styles.siteNav}>
    <ul>
      {navLinks.map(({ url, text, external }) => (
        <li key={text}>
          {external ? <a href={url}>{text}</a> : <Link href={url}>{text}</Link>}
        </li>
      ))}
    </ul>
  </nav>
)

export default Header
