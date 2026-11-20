import type { Marca, OpcaoMarca } from '../data/tipos'

type FiltroMarcasProps = {
  marcas: Marca[]
  marcaSelecionada: OpcaoMarca
  aoSelecionarMarca: (marca: OpcaoMarca) => void
}

function FiltroMarcas({
  marcas,
  marcaSelecionada,
  aoSelecionarMarca,
}: FiltroMarcasProps) {
  const opcoes: OpcaoMarca[] = ['Todos', ...marcas]

  return (
    <div className="brand-filters" aria-label="Filtrar por marca">
      {opcoes.map((marca) => (
        <button
          key={marca}
          type="button"
          className={`brand-filter${marca === marcaSelecionada ? ' brand-filter--active' : ''}`}
          aria-pressed={marca === marcaSelecionada}
          onClick={() => aoSelecionarMarca(marca)}
        >
          {marca}
        </button>
      ))}
    </div>
  )
}

export default FiltroMarcas
