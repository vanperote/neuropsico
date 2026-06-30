import type { ImgHTMLAttributes } from 'react'

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
}

export function toWebpSrc(src: string) {
  return src.replace(/\.(jpe?g|png)$/i, '.webp')
}

export function OptimizedImage({ src, alt, ...props }: OptimizedImageProps) {
  const webpSrc = toWebpSrc(src)

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt ?? ''} {...props} />
    </picture>
  )
}
