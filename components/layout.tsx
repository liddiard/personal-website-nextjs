import type { ReactNode } from 'react'
import Header from './header'
import Footer from './footer'

interface LayoutProps {
  page?: string
  className?: string
  children: ReactNode
}

const Layout = ({ page = '', children, className = '' }: LayoutProps) => (
  <>
    <main className={[page, className].filter(Boolean).join(' ')}>
      <Header />
      {children}
    </main>
    <Footer />
  </>
)

export default Layout
