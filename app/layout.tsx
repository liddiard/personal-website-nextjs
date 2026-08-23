import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { crimsonPro, lexend } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Harrison Liddiard',
    template: '%s | Harrison Liddiard',
  },
  description:
    'Harrison Liddiard is a technical product manager working at PayPal in New York City. See his projects and resume.',
  openGraph: {
    images: ['https://harrisonliddiard.com/img/default_og_image.png'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${lexend.variable}`}>
      <body>{children}</body>
    </html>
  )
}
