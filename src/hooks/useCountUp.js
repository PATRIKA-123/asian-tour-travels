import { useEffect, useRef, useState } from 'react'

/**
 * Animate a number from 0 → target once it scrolls into view.
 * @param {number} target  final value
 * @param {number} duration animation length in ms
 * @returns {[number, React.RefObject]} current value + ref to attach
 */
export default function useCountUp(target, duration = 1800) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Respect reduced motion: jump straight to the final value.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(target)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            // easeOutExpo for a satisfying finish
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setValue(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  return [value, ref]
}
