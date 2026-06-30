import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )

    document.querySelectorAll('.site .reveal:not(.in), .site .mask:not(.in)').forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('in')
      } else {
        io.observe(el)
      }
    })

    return () => io.disconnect()
  }, [])
}
