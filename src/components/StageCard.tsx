import type { Stage } from '../data/tipos'

type StageCardProps = {
  stage: Stage
  selecionado?: boolean
}

function StageCard({ stage, selecionado = false }: StageCardProps) {
  return (
    <article className={`stage-card${selecionado ? ' stage-card--selected' : ''}`}>
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
