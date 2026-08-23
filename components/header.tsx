import Link from 'next/link'
import navLinksJson from '@/data/navLinks.json'

interface NavLink {
  url: string
  text: string
  external: boolean
}

const navLinks = navLinksJson as NavLink[]

const Header = () => (
  <nav className="mb-4 font-body text-xl text-center">
    <ul className="mt-0 list-none p-0 font-semibold">
      {navLinks.map(({ url, text, external }) => (
        <li key={text} className="inline-block pr-[1em]">
          {external ? <a href={url}>{text}</a> : <Link href={url}>{text}</Link>}
        </li>
      ))}
    </ul>
  </nav>
)

export default Header
