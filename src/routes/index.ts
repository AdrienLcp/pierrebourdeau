import { isValidString } from '@/helpers/strings'
import type { ValueOf } from '@/helpers/types'

export const ROUTES = {
  about: '/about',
  home: '/',
  playground: '/playground',
  services: '/services',
  work: '/work'
} as const

type Routes = typeof ROUTES
export type RouteKey = keyof Routes
export type RoutePath = ValueOf<Routes>

const internalRoutes: string[] = Object.values(ROUTES)

export const isInternalRoute = (href: unknown): href is RoutePath => {
  return isValidString(href) && internalRoutes.includes(href)
}
