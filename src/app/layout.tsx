'use client'

import Header from '@/components/Header'
import { store } from '@/redux/store'
import { ThemeProvider, createTheme } from '@mui/material'
import { Roboto } from 'next/font/google'
import { Provider } from 'react-redux'

import '../assets/css/globals.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <html lang='en' className={roboto.className}>
          <body>
            <Header />
            <main className='container mx-auto pt-24'>{children}</main>
          </body>
        </html>
      </ThemeProvider>
    </Provider>
  )
}
