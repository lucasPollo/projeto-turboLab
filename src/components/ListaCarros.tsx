import type { Carro } from '../data/tipos'
import CarroCard from './CarroCard'

type ListaCarrosProps = {
  carros: Carro[]
  carroSelecionado: Carro | null
  aoSelecionarCarro: (carro: Carro) => void
}

function ListaCarros({
  carros,
  carroSelecionado,
  aoSelecionarCarro,
}: ListaCarrosProps) {
  return (
    <div className="vehicle-grid">
      {carros.map((carro) => (
        <CarroCard
          key={carro.id}
          carro={carro}
          selecionado={carro.id === carroSelecionado?.id}
          aoSelecionar={aoSelecionarCarro}
        />
      ))}
    </div>
  )
}

export default ListaCarros
