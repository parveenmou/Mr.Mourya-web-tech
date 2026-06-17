import { useEffect } from 'react'

/**
 * Adds the `visible` class to every `.scroll-animate` element once it scrolls
 * into view (replacement for the original IntersectionObserver setup).
 */
export default function useScrollReveal(selector = '.scroll-animate') {
  useEffect(() => {
    const els = document.querySelectorAll(selector)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selector])
}
