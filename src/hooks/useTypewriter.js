import { useEffect, useState } from 'react'

/**
 * Cycles through `words`, typing and erasing one character at a time.
 * Mirrors the original vanilla typewriter behaviour.
 */
export default function useTypewriter(
  words,
  { typeSpeed = 60, eraseSpeed = 40, holdTime = 1800 } = {},
) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) return
    const current = words[index % words.length]

    // Finished typing the full word -> pause, then start deleting.
    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), holdTime)
      return () => clearTimeout(t)
    }

    // Finished deleting -> advance to the next word.
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? eraseSpeed : typeSpeed,
    )
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, typeSpeed, eraseSpeed, holdTime])

  return words.length ? words[index % words.length].substring(0, subIndex) : ''
}
