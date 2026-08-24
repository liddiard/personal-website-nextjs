import { Crimson_Pro, Encode_Sans, Oxygen } from 'next/font/google'

export const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-crimson-pro',
})

export const lexend = Encode_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-encode-sans',
})

export const oxygen = Oxygen({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oxygen',
})
