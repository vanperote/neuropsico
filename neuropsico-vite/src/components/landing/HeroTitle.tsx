import { useEffect, useRef } from 'react'

function wrapCharacters(container: HTMLElement) {
  const nodes = [...container.childNodes]
  container.textContent = ''

  function processNode(node: Node, target: HTMLElement) {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent?.split(/(\s+)/).forEach((part) => {
        if (!part) return
        if (/^\s+$/.test(part)) {
          target.appendChild(document.createTextNode(part))
          return
        }
        const wordSpan = document.createElement('span')
        wordSpan.style.cssText = 'display:inline-block;white-space:nowrap;'
        for (const c of part) {
          const ch = document.createElement('span')
          ch.className = 'ch'
          ch.textContent = c
          wordSpan.appendChild(ch)
        }
        target.appendChild(wordSpan)
      })
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const source = node as HTMLElement
      const el = document.createElement(source.tagName)
      for (const { name, value } of source.attributes) el.setAttribute(name, value)
      ;[...source.childNodes].forEach((child) => processNode(child, el))
      target.appendChild(el)
    }
  }

  nodes.forEach((node) => processNode(node, container))
}

export function HeroTitle() {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    wrapCharacters(el)
    let d = 0
    el.querySelectorAll('.ch').forEach((ch) => {
      ;(ch as HTMLElement).style.transitionDelay = `${d * 14}ms`
      d++
    })
    requestAnimationFrame(() => setTimeout(() => el.classList.add('in'), 100))
  }, [])

  return (
    <h1>
      <span className="chars" ref={ref}>
        A avaliação que muda a relação da sua família com o <em>aprender</em>.
      </span>
    </h1>
  )
}
