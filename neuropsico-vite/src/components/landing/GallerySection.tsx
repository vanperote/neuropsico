import { CoverFlow } from '@/components/ui/coverflow'
import { galleryItems } from '@/data/content'

export function GallerySection() {
  return (
    <section className="galeria">
      <div className="container">
        <div className="head">
          <span className="label">Galeria</span>
          <h2>O espaço de atendimento</h2>
        </div>
      </div>
      <div className="container">
        <CoverFlow
          className="gallery-coverflow"
          items={galleryItems.map((item) => ({
            id: item.id,
            image: item.image,
            title: item.title,
          }))}
          itemWidth={480}
          itemHeight={300}
          stackSpacing={80}
          centerGap={220}
          rotation={45}
          enableScroll
          enableClickToSnap
          enableReflection={false}
          renderImage={({ src, alt, width, height, className, draggable, loading }) => (
            <img
              src={src}
              alt={galleryItems.find((g) => g.image === src)?.alt ?? alt}
              width={width}
              height={height}
              className={className}
              draggable={draggable}
              loading={loading}
            />
          )}
        />
        <p className="gallery-hint">
          Arraste · Scroll horizontal · Setas do teclado ← →
        </p>
      </div>
    </section>
  )
}
