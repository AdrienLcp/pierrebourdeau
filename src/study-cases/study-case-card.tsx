import React from 'react'

import { Image, type ImageObj } from '@/components/image'
import { isValidString } from '@/helpers/strings'

import './study-case-card.styles.sass'

type StudyCaseCardProps = {
  catchPhrase?: string
  clientName?: string
  image?: ImageObj
}

export const StudyCaseCard: React.FC<StudyCaseCardProps> = ({ catchPhrase, clientName, image }) => {
  const isEmptyStudyCase
    = image == null
    && !isValidString(catchPhrase)
    && !isValidString(clientName)

  if (isEmptyStudyCase) {
    return null
  }

  return (
    <div className='study-case-card'>
      {image != null && (
        <Image
          alt={image.alt}
          className='study-case-card__image'
          height={image.height}
          src={image.src}
          width={image.width}
        />
      )}

      {isValidString(clientName) && (
        <span className='study-case-card__client-name'>
          {clientName}
        </span>
      )}

      {isValidString(catchPhrase) && (
        <p className='study-case-card__catch-phrase'>
          {catchPhrase}
        </p>
      )}
    </div>
  )
}
