import type { Stage } from '../data/tipos'

type StageCardProps = {
  stage: Stage
  selecionado: boolean
  aoSelecionar: (stage: Stage) => void
}

function StageCard({ stage, selecionado, aoSelecionar }: StageCardProps) {
  return (
    <article
      className={`stage-card${selecionado ? ' stage-card--selected' : ''}`}
      role="button"
      tabIndex={0}
      aria-pressed={selecionado}
      onClick={() => aoSelecionar(stage)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          aoSelecionar(stage)
        }
      }}
    >
      <h4 className="stage-card__title">
        {stage.nome.toUpperCase()}
      </h4>
      <p className="stage-card__description">
        {stage.descricao}
      </p>
    </article>
  )
}

export default StageCard
