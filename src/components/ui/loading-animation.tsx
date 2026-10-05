import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface KineticTypographyLoaderProps {
  words?: string[]
  /** When false, the last word assembles and stays on screen. */
  loop?: boolean
  className?: string
}

const DEFAULT_WORDS = ['LOADING', 'ASSEMBLING', 'FINALIZING']

export const KineticTypographyLoader = ({
  words = DEFAULT_WORDS,
  loop = true,
  className,
}: KineticTypographyLoaderProps) => {
  const loaderTextRef = useRef<HTMLHeadingElement>(null)
  const wordsKey = words.join('|')

  useEffect(() => {
    const loaderText = loaderTextRef.current
    if (!loaderText) return

    let currentWordIndex = 0
    let animationTimeout: ReturnType<typeof setTimeout> | undefined
    let wordCycleTimeout: ReturnType<typeof setTimeout> | undefined

    const randomTransform = () => {
      const x = (Math.random() - 0.5) * 800
      const y = (Math.random() - 0.5) * 800
      const z = (Math.random() - 0.5) * 800
      const rotX = (Math.random() - 0.5) * 360
      const rotY = (Math.random() - 0.5) * 360
      return `translate3d(${x}px, ${y}px, ${z}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`
    }

    function animateWord() {
      const word = words[currentWordIndex]
      loaderText!.innerHTML = '' // Clear previous word

      const chars = word.split('').map((char, index) => {
        const span = document.createElement('span')
        span.className = 'char'
        // Keep spaces from collapsing inside inline-block spans
        span.textContent = char === ' ' ? ' ' : char

        span.style.setProperty('--transform-from', randomTransform())
        span.style.animationName = 'fly-in'
        span.style.animationDelay = `${index * 0.05}s`
        span.style.animationPlayState = 'running'

        loaderText!.appendChild(span)
        return span
      })

      const isLast = currentWordIndex === words.length - 1
      if (isLast && !loop) return

      animationTimeout = setTimeout(() => {
        chars.forEach((span, index) => {
          span.style.setProperty('--transform-to', randomTransform())
          span.style.animationName = 'fly-out'
          span.style.animationDelay = `${(chars.length - index) * 0.05}s`
        })
      }, 2500)

      wordCycleTimeout = setTimeout(() => {
        currentWordIndex = (currentWordIndex + 1) % words.length
        animateWord()
      }, 3500)
    }

    animateWord()

    // Cleanup function to clear timeouts when the component unmounts
    return () => {
      clearTimeout(animationTimeout)
      clearTimeout(wordCycleTimeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordsKey, loop])

  return (
    <div className="loader-container">
      <h1
        ref={loaderTextRef}
        aria-label={words[words.length - 1]}
        className={cn(
          'text-4xl sm:text-6xl lg:text-8xl font-extrabold text-white whitespace-nowrap',
          className,
        )}
      ></h1>
    </div>
  )
}
