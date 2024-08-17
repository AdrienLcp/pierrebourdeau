'use client'

import NextImage, { type ImageProps as NextImageProps } from 'next/image'
import React from 'react'

import { classNames } from '@/helpers/styles'
import { ImageFallbackIcon } from '@/icons/image-fallback'

import './image.styles.sass'

const DEFAULT_IMAGE_SIZE = 52

type ImageFallbackProps = {
  height: NextImageProps['height']
  width: NextImageProps['width']
}

const ImageFallback: React.FC<ImageFallbackProps> = ({ height, width }) => (
  <span className='image__fallback'>
    <ImageFallbackIcon height={height} width={width} />
  </span>
)

export type ImageSrc = NextImageProps['src'] | null | undefined

// Override the default `src` prop to allow for `null` values
type ImageProps = Omit<NextImageProps, 'src'> & {
  src: ImageSrc
}

export const Image: React.FC<ImageProps> = ({
  className,
  height = DEFAULT_IMAGE_SIZE,
  onError,
  src,
  width = DEFAULT_IMAGE_SIZE,
  ...props
}) => {
  const [hasImageError, setHasImageError] = React.useState<boolean>(false)

  if (hasImageError || src == null || (typeof src === 'string' && src.trim() === '')) {
    return <ImageFallback height={height} width={width} />
  }

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasImageError(true)

    if (typeof onError === 'function') {
      onError(event)
    }
  }

  return (
    <NextImage
      className={classNames('image', className)}
      fetchPriority='low'
      height={height}
      loading='lazy'
      onError={handleImageError}
      src={src}
      width={width}
      {...props}
    />
  )
}
