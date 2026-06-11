import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view (for nav highlighting)
 * and whether the page has been scrolled (for navbar styling).
 * @param {string[]} ids  section ids to watch (without the leading #)
 */
export default function useScrollSpy(ids = []) {
  const [active, setActive] = useState(ids[0] || '')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [ids])

  return { active, scrolled }
}
