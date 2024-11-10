import React, { useState, useEffect } from 'react'

type Props = {
  text: string
  speed: number
  delay: number
}

function TypingEffect({ text: actualText, speed = 20, delay: startDelay = 500 }: Props) {
  const [text, setText] = useState('')

  useEffect(() => {
    const startTyping = () => {
      let i = 0
      let temp = ''

      const typer = () => {
        if (i < actualText.length) {
          temp += actualText.charAt(i)
          setText(temp)
          i++
          setTimeout(typer, speed)
        }
      }

      typer()
    }

    const delayTimeout = setTimeout(startTyping, startDelay)

    return () => clearTimeout(delayTimeout)
  }, [actualText, speed, startDelay])

  return <p>{text}</p>
}

export default TypingEffect
