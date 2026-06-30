import { useEffect, useRef, useState } from 'react'

type TimelineItem = {
  year: string
  title: string
  description: string
}

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect()
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0
}

export function AnimatedTimeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const activate = () => setActive(true)

    const scheduleActivate = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => activate())
      })
    }

    if (isInViewport(el)) {
      scheduleActivate()
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          activate()
          io.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`timeline-mini${active ? ' in' : ''}`}>
      {items.map((item, index) => (
        <div key={item.year} className="tm-item" style={{ transitionDelay: `${0.15 + index * 0.12}s` }}>
          <span className="tm-dot" aria-hidden="true" />
          <span className="tm-year">{item.year}</span>
          <div className="tm-text">
            <b>{item.title}</b>
            <span>{item.description}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
