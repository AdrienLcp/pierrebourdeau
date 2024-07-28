export const ROUTES = {
  about: '/about',
  home: '/',
  playground: '/playground',
  services: '/services',
  work: '/work'
} as const

export type RouteKey = keyof typeof ROUTES
export type RoutePath = typeof ROUTES[RouteKey]
