'use client'

import React from 'react'

import { Footer } from '@/app/components/footer'
import { Header } from '@/app/components/header'
import { useI18n } from '@/i18n/client'

import './html.styles.sass'

export const Html: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { currentLocale } = useI18n()

  return (
    <html lang={currentLocale} dir='ltr'>
      <body>
        <Header />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
