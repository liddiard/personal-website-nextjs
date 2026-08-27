'use client'

import type { MouseEvent, ReactNode } from 'react'
import styles from './project-link.module.css'

interface ProjectLinkProps {
  href: string
  linkConfirmation?: string
  children: ReactNode
}

const ProjectLink = ({
  href,
  linkConfirmation,
  children,
}: ProjectLinkProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!linkConfirmation) {
      return
    }
    event.preventDefault()
    if (window.confirm(linkConfirmation)) {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.projectLink}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

export default ProjectLink
