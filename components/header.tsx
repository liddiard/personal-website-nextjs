import Link from 'next/link'
import navLinksJson from '@/data/navLinks.json'

interface NavLink {
  url: string
  text: string
  external: boolean
}

const navLinks = navLinksJson as NavLink[]

const Header = () => (
  <nav className="mb-4 font-body text-xl">
    <ul className="mt-0 list-none p-0 font-semibold flex gap-x-5 gap-y-2 justify-center flex-wrap">
      {navLinks.map(({ url, text, external }) => (
        <li key={text}>
          {external ? <a href={url}>{text}</a> : <Link href={url}>{text}</Link>}
        </li>
      ))}
    </ul>
  </nav>
)

export default Header
