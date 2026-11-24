type DesempenhoCardProps = {
  titulo: string
  unidade: 'cv' | 'Nm'
  valorOriginal: number
  valorPreparado: number
  valorMaximo: number
}

const formatadorNumero = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 1,
})

const formatadorGanho = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 1,
  signDisplay: 'always',
})

const formatadorPercentual = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
  signDisplay: 'always',
})

function DesempenhoCard({
  titulo,
  unidade,
  valorOriginal,
  valorPreparado,
  valorMaximo,
}: DesempenhoCardProps) {
  const ganhoAbsoluto = valorPreparado - valorOriginal
  const ganhoPercentual = (ganhoAbsoluto / valorOriginal) * 100
  const originalFormatado = `${formatadorNumero.format(valorOriginal)} ${unidade}`
  const preparadoFormatado = `${formatadorNumero.format(valorPreparado)} ${unidade}`

  return (
    <article className="performance-card">
      <p className="performance-card__label">{titulo}</p>
      <h4 className="performance-card__value">{preparadoFormatado}</h4>

      <p className="performance-card__comparison">Original: {originalFormatado}</p>
      <div
        className="performance-card__track"
        role="meter"
        aria-label={`${titulo} original`}
        aria-valuemin={0}
        aria-valuemax={valorMaximo}
        aria-valuenow={valorOriginal}
        aria-valuetext={originalFormatado}
      >
        <div
          className="performance-card__fill performance-card__fill--original"
          style={{ width: `${(valorOriginal / valorMaximo) * 100}%` }}
        />
      </div>

      <p className="performance-card__comparison">Preparado: {preparadoFormatado}</p>
      <div
        className="performance-card__track"
        role="meter"
        aria-label={`${titulo} preparado`}
        aria-valuemin={0}
        aria-valuemax={valorMaximo}
        aria-valuenow={valorPreparado}
        aria-valuetext={preparadoFormatado}
      >
        <div
          className={`performance-card__fill performance-card__fill--${unidade === 'cv' ? 'power' : 'torque'}`}
          style={{ width: `${(valorPreparado / valorMaximo) * 100}%` }}
        />
      </div>

      <p className="performance-card__gain">
        Ganho: {formatadorGanho.format(ganhoAbsoluto)} {unidade} ({formatadorPercentual.format(ganhoPercentual)}%)
      </p>
    </article>
  )
}

export default DesempenhoCard
