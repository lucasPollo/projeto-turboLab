import type { Stage } from '../data/tipos'
import StageCard from './StageCard'

type ListaStagesProps = {
  stages: Stage[]
}

function ListaStages({ stages }: ListaStagesProps) {
  return (
    <div className="stage-grid">
      {stages.map((stage) => (
        <StageCard
          key={stage.id}
          stage={stage}
          selecionado={stage.id === 1}
        />
      ))}
    </div>
  )
}

export default ListaStages
