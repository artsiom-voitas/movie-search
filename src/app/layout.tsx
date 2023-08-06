import type { Metadata } from 'next'
import '../assets/css/globals.css'
import { Roboto } from 'next/font/google'

export const metadata: Metadata = {
  title: 'AV | Movie Search',
  description: 'Search the movie to Watch now!',
}

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}
