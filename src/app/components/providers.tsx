'use client'

import React from 'react'

import { I18nProvider } from '@/i18n/client'

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => (
  <I18nProvider>
    {children}
  </I18nProvider>
)
