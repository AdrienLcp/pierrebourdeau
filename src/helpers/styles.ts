export type Style = Record<`--${string}`, string | number>

export type ClassNames = Array<string | undefined | null | false>

export const classNames = (...classes: Array<string | undefined | null | false>): string => {
  return classes.filter(Boolean).join(' ')
}
