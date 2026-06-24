import { useEffect } from 'react'

// Adds the `visible` class to `.reveal` and `.stat-box` elements once they
// scroll into view, mirroring the original IntersectionObserver behaviour.
export default function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const els = document.querySelectorAll('.reveal, .stat-box')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
