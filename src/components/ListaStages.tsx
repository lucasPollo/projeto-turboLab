import type { Stage } from '../data/tipos'
import StageCard from './StageCard'

type ListaStagesProps = {
  stages: Stage[]
  stageSelecionado: Stage
  aoSelecionarStage: (stage: Stage) => void
}

function ListaStages({
  stages,
  stageSelecionado,
  aoSelecionarStage,
}: ListaStagesProps) {
  return (
    <div className="stage-grid">
      {stages.map((stage) => (
        <StageCard
          key={stage.id}
          stage={stage}
          selecionado={stage.id === stageSelecionado.id}
          aoSelecionar={aoSelecionarStage}
        />
      ))}
    </div>
  )
}

export default ListaStages
