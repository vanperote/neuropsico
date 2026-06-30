import { useEffect, useRef, useState } from 'react'

type TimelineItem = {
  year: string
  title: string
  description: string
}

export function AnimatedTimeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          io.disconnect()
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -40px 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`timeline-mini${active ? ' in' : ''}`}>
      {items.map((item, index) => (
        <div key={item.year} className="tm-item" style={{ transitionDelay: `${index * 0.12}s` }}>
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
