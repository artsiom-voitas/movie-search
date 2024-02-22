'use client'

import { store } from '@/redux/store'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider } from 'react-redux'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </Provider>
  )
}
