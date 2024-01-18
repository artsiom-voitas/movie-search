import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'AV | Movie Search',
  description: 'Search the movie to Watch now!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${GeistSans.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
