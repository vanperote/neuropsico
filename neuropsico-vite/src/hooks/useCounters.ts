import { useEffect } from 'react'

export function useCounters() {
  useEffect(() => {
    const counters = document.querySelectorAll('.site .count')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const target = parseInt(el.dataset.target ?? '0', 10)
          const suffix = el.dataset.suffix ?? ''
          let cur = 0
          const step = Math.max(1, Math.round(target / 50))
          const t = setInterval(() => {
            cur += step
            if (cur >= target) {
              cur = target
              clearInterval(t)
            }
            el.textContent = `${cur}${suffix}`
          }, 22)
          io.unobserve(el)
        })
      },
      { threshold: 0.6 },
    )
    counters.forEach((c) => io.observe(c))
    return () => io.disconnect()
  }, [])
}
