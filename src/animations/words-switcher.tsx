import React from 'react'

import type { Style } from '@/helpers/styles'

import './words-switcher.styles.sass'

type WordsSwitcherProps = {
  wordClassName?: string
  words: Array<string>
}

export const WordsSwitcher: React.FC<WordsSwitcherProps> = ({ wordClassName, words }) => {
  const wordCount = words.length
  const animationDuration = 5 * wordCount
  const pausePercentage = 10

  React.useEffect(() => {
    const styleSheet = document.styleSheets[0]

    const generateKeyframes = () => {
      let keyframes = '@keyframes switch-words {'
      const step = 100 / wordCount
      const pause = (pausePercentage / 100) * step

      for (let i = 0; i < wordCount; i++) {
        const start = i * step
        const end = start + step - pause

        keyframes += `
          ${start}% { transform: translateY(-${i * 100}%); }
          ${end}% { transform: translateY(-${i * 100}%); }
          ${end + pause}% { transform: translateY(-${(i + 1) * 100}%); }
        `
      }

      keyframes += `
        100% { transform: translateY(-${wordCount * 100}%); }
      }`

      return keyframes
    }

    styleSheet.insertRule(generateKeyframes(), styleSheet.cssRules.length)
  }, [wordCount])

  if (words.length === 0) {
    return null
  }

  return (
    <div className='words-switcher'>
      {[...words, words[0]].map((string, index) => {
        const wordStyle: Style = {
          '--word-index': index,
          '--animation-duration': `${animationDuration}s`
        }

        return (
          <div
            className={wordClassName}
            key={index}
            style={wordStyle}
          >
            {string.split('').map((character, index) => {
              const characterStyle: Style = {
                '--character-index': index
              }

              return (
                <span
                  className='words-switcher__character'
                  key={index}
                  style={characterStyle}
                >
                  {character}
                </span>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
