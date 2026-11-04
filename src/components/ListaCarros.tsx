import type { Carro } from '../data/tipos'
import CarroCard from './CarroCard'

type ListaCarrosProps = {
  carros: Carro[]
}

function ListaCarros({ carros }: ListaCarrosProps) {
  return (
    <div className="vehicle-grid">
      {carros.map((carro) => (
        <CarroCard
          key={carro.id}
          carro={carro}
          selecionado={carro.id === 'golf-gti'}
        />
      ))}
    </div>
  )
}

export default ListaCarros
