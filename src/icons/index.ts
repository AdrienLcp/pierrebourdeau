import './icon.styles.sass'

export { BehanceIcon } from './behance'
export { DribbbleIcon } from './dribbble'
export { GoogleIcon } from './google'
export { InstagramIcon } from './instagram'
export { LinkedinIcon } from './linkedin'
export { MicrosoftIcon } from './microsoft'

export type IconProps = React.ComponentProps<'svg'> & {
  size?: number
}

export const DEFAULT_SVG_SIZE = 24
export const DEFAULT_SVG_COLOR = 'var(--neutral-foreground-primary-rest, #171716)'

export const getSvgSizeProps = (size: number = DEFAULT_SVG_SIZE) => {
  return {
    className: 'icon',
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    width: size
  }
}

export const DEFAULT_SVG_PROPS = {
  ...getSvgSizeProps(),
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg'
}
