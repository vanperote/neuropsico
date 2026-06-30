import type { CSSProperties } from 'react'

const STEPS = [
  {
    num: '01',
    title: 'Primeiro contato',
    description: 'Conversa inicial para entender a queixa e organizar os próximos passos.',
  },
  {
    num: '02',
    title: 'Avaliação',
    description: 'Sessões com instrumentos validados para mapear o perfil de aprendizagem.',
  },
  {
    num: '03',
    title: 'Plano personalizado',
    description: 'Devolutiva detalhada e construção de um plano sob medida.',
  },
  {
    num: '04',
    title: 'Acompanhamento',
    description: 'Sessões contínuas com revisão periódica junto à família.',
  },
] as const

export function ProcessoSection() {
  return (
    <section className="processo dark" id="processo">
      <div className="container">
        <div className="head center">
          <span className="label">Processo</span>
          <h2>Quatro etapas, um caminho claro</h2>
        </div>

        <div className="stack-wrap">
          {STEPS.map((step, index) => (
            <div
              key={step.num}
              className="stack-item"
              style={{ '--stack-i': index } as CSSProperties}
            >
              <article className="stack-card">
                <span className="stack-num">{step.num}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
