import { useState } from 'react'
import './App.css'
import FiltroMarcas from './components/FiltroMarcas'
import Footer from './components/Footer'
import Header from './components/Header'
import ListaCarros from './components/ListaCarros'
import ListaStages from './components/ListaStages'
import { carros } from './data/carros'
import { stages } from './data/stages'
import type { Carro, OpcaoMarca, Stage } from './data/tipos'

const marcas = Array.from(new Set(carros.map((carro) => carro.marca)))

const formatadorNumero = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 1,
})

const formatadorPercentual = new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 1,
  signDisplay: 'always',
})

function calcularGanho(valorPreparado: number, valorOriginal: number) {
  return ((valorPreparado - valorOriginal) / valorOriginal) * 100
}

function App() {
  const [carroSelecionado, setCarroSelecionado] = useState<Carro | null>(null)
  const [marcaSelecionada, setMarcaSelecionada] = useState<OpcaoMarca>('Todos')
  const [stageSelecionado, setStageSelecionado] = useState<Stage>(stages[0])

  const carrosFiltrados = marcaSelecionada === 'Todos'
    ? carros
    : carros.filter((carro) => carro.marca === marcaSelecionada)

  const desempenhoDoStage = stageSelecionado.desempenho
  const desempenho = desempenhoDoStage?.carroId === carroSelecionado?.id
    ? desempenhoDoStage
    : undefined
  const ganhoPotencia = desempenho && carroSelecionado
    ? calcularGanho(desempenho.potencia, carroSelecionado.potencia)
    : null
  const ganhoTorque = desempenho && carroSelecionado
    ? calcularGanho(desempenho.torque, carroSelecionado.torque)
    : null

  function alternarCarroSelecionado(carro: Carro) {
    setCarroSelecionado((carroAtual) => (
      carroAtual?.id === carro.id ? null : carro
    ))
  }

  return (
    <div className="app-shell">
      <Header />

      <main>
        <section
          id="inicio"
          className="hero"
          style={{
            backgroundImage: "url('/imagemFundoHero.jpg')",
          }}
        >
          <div className="hero__overlay" />
          <div className="hero__content">
            <h1 className="hero__heading">
              Descubra o potencial do seu carro
            </h1>

            <p className="hero__description">
              Escolha seu carro, compare os três níveis de Stage
              e veja as mudanças estimadas de desempenho.
            </p>
          </div>
        </section>

        {/* CATÁLOGO DE CARROS */}
        <section id="catalogo" className="catalog">
          <h2 className="catalog__title">
            Catálogo de carros
          </h2>

          <p className="catalog__intro">
            Escolha entre 12 modelos disponíveis
          </p>

          {/* FILTROS */}
          <div className="catalog__controls">
            <FiltroMarcas
              marcas={marcas}
              marcaSelecionada={marcaSelecionada}
              aoSelecionarMarca={setMarcaSelecionada}
            />

            {/* BUSCA */}
            <div className="search-field">
              <label htmlFor="buscar-carro" className="visually-hidden">
                Buscar veículo
              </label>

              <input
                id="buscar-carro"
                type="search"
                placeholder="⌕  Buscar veículo por nome..."
                className="search-field__input"
              />
            </div>
          </div>

          {/* GRID DE VEÍCULOS */}
          <ListaCarros
            carros={carrosFiltrados}
            carroSelecionado={carroSelecionado}
            aoSelecionarCarro={alternarCarroSelecionado}
          />
        </section>

        {/* SIMULAÇÃO DE PERFORMANCE */}
        <section id="simulacao" className="simulation">
          <div className="simulation__panel">
            {/* CARRO SELECIONADO */}
            <h2 className="simulation__title">
              Carro selecionado
            </h2>

            {carroSelecionado === null ? (
              <p className="simulation__subtitle" role="status">
                Selecione um veículo no catálogo para visualizar os dados de preparação.
              </p>
            ) : (
              <>
              <p className="simulation__subtitle">
              {carroSelecionado.marca} {carroSelecionado.nome} • {carroSelecionado.motor}
            </p>

            {/* IMAGEM DO CARRO */}
            <img
              src={carroSelecionado.imagem}
              alt={`${carroSelecionado.marca} ${carroSelecionado.nome} selecionado`}
              className="simulation__image"
            />

            {/* DADOS ORIGINAIS */}
            <div className="simulation__original">
              <span className="simulation__original-label">
                Original
              </span>
              <span>{carroSelecionado.potencia} cv</span>
              <span>•</span>
              <span>{carroSelecionado.torque} Nm</span>
            </div>

            {/* LISTAGEM DE STAGES */}
            <h3 className="simulation__section-title">
              Selecione um Stage
            </h3>

            <ListaStages
              stages={stages}
              stageSelecionado={stageSelecionado}
              aoSelecionarStage={setStageSelecionado}
            />

            {/* RESULTADOS DA PREPARAÇÃO */}
            <h3 className="simulation__section-title">
              Resultados da preparação • {stageSelecionado.nome}
            </h3>

            {!desempenho && (
              <p className="simulation__subtitle" role="status">
                Dados de desempenho ainda não disponíveis para este veículo e stage.
              </p>
            )}

            <div className="performance-grid">
              {/* POTÊNCIA */}
              <article className="performance-card">
                <p className="performance-card__label">
                  Potência
                </p>

                <h4 className="performance-card__value">
                  {desempenho ? `${desempenho.potencia} cv` : '—'}
                </h4>

                <div className="performance-card__track">
                  <div
                    className="performance-card__fill performance-card__fill--power"
                    style={{ width: `${desempenho?.larguraBarraPotencia ?? 0}%` }}
                  />
                </div>

                <p className="performance-card__gain">
                  {ganhoPotencia === null
                    ? 'Não disponível'
                    : `${formatadorPercentual.format(ganhoPotencia)}%`}
                </p>
              </article>

              {/* TORQUE */}
              <article className="performance-card">
                <p className="performance-card__label">
                  Torque
                </p>

                <h4 className="performance-card__value">
                  {desempenho ? `${desempenho.torque} Nm` : '—'}
                </h4>

                <div className="performance-card__track">
                  <div
                    className="performance-card__fill performance-card__fill--torque"
                    style={{ width: `${desempenho?.larguraBarraTorque ?? 0}%` }}
                  />
                </div>

                <p className="performance-card__gain">
                  {ganhoTorque === null
                    ? 'Não disponível'
                    : `${formatadorPercentual.format(ganhoTorque)}%`}
                </p>
              </article>

              {/* ACELERAÇÃO */}
              <article className="performance-card">
                <p className="performance-card__label">
                  0 a 100 km/h
                </p>

                <h4 className="performance-card__value">
                  {desempenho
                    ? `${formatadorNumero.format(desempenho.tempoZeroACem)} s`
                    : '—'}
                </h4>
              </article>

              {/* CUSTO ESTIMADO */}
              <article className="performance-card">
                <p className="performance-card__label">
                  Custo estimado
                </p>

                <h4 className="performance-card__value">
                  {desempenho
                    ? `R$ ${formatadorNumero.format(desempenho.custo)}`
                    : '—'}
                </h4>
              </article>
            </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
