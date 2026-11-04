import type { Carro } from '../data/tipos'

type CarroCardProps = {
  carro: Carro
  selecionado?: boolean
}

function CarroCard({ carro, selecionado = false }: CarroCardProps) {
  const nomeCompleto = carro.nome.startsWith(carro.marca)
    ? carro.nome
    : `${carro.marca} ${carro.nome}`

  return (
    <article className={`vehicle-card${selecionado ? ' vehicle-card--selected' : ''}`}>
      <img
        src={carro.imagem}
        alt={nomeCompleto}
        className="vehicle-card__image"
      />
      <h3 className="vehicle-card__title">{carro.nome}</h3>
      <p className="vehicle-card__engine">Motor: {carro.motor}</p>
      <p className="vehicle-card__power">Potência: {carro.potencia} cv</p>
      <p className="vehicle-card__torque">Torque: {carro.torque} Nm</p>
      <button
        type="button"
        className={`vehicle-card__button${selecionado ? ' vehicle-card__button--selected' : ''}`}
      >
        {selecionado ? '✓ Selecionado' : 'Selecionar veículo'}
      </button>
    </article>
  )
}

export default CarroCard
