import { Gabarito, Lexend, Oxygen } from 'next/font/google'

export const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gabarito',
})

export const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export const oxygen = Oxygen({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oxygen',
})
