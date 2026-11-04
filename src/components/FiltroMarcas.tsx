function FiltroMarcas() {
  return (
    <div className="brand-filters" aria-label="Filtrar por marca">
      <button
        type="button"
        className="brand-filter brand-filter--active"
      >
        Todos
      </button>

      <button type="button" className="brand-filter">
        Volkswagen
      </button>

      <button type="button" className="brand-filter">
        BMW
      </button>

      <button type="button" className="brand-filter">
        Audi
      </button>
    </div>
  )
}

export default FiltroMarcas
