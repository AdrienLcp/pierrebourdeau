export { BehanceIcon } from './behance'
export { DribbbleIcon } from './dribbble'
export { InstagramIcon } from './instagram'
export { LinkedinIcon } from './linkedin'

export type BaseIconProps = React.ComponentProps<'svg'> & {
  size?: number
}

const DEFAULT_SVG_SIZE = 30
export const DEFAULT_SVG_COLOR = 'var(--neutral-foreground-primary-rest, #171716)'

export const getSvgSizeProps = (size: number = 25) => {
  return {
    height: `${size}`,
    viewBox: `0 0 ${size} ${size}`,
    width: `${size}`
  }
}

export const DEFAULT_SVG_PROPS = {
  ...getSvgSizeProps(DEFAULT_SVG_SIZE),
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg'
}
