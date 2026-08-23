'use client'

import type { MouseEvent, ReactNode } from 'react'

interface ProjectLinkProps {
  href: string
  className?: string
  linkConfirmation?: string
  children: ReactNode
}

const ProjectLink = ({
  href,
  className,
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
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

export default ProjectLink
