import { useState } from 'react'
import './App.css'
import DesempenhoCard from './components/DesempenhoCard'
import FiltroMarcas from './components/FiltroMarcas'
import Footer from './components/Footer'
import Header from './components/Header'
import ListaCarros from './components/ListaCarros'
import ListaStages from './components/ListaStages'
import { carros } from './data/carros'
import { stages } from './data/stages'
import type { Carro, OpcaoMarca, Stage } from './data/tipos'

const marcas = Array.from(new Set(carros.map((carro) => carro.marca)))

const formatadorAceleracao = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
})

const formatadorCusto = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

function App() {
  const [carroSelecionado, setCarroSelecionado] = useState<Carro | null>(null)
  const [marcaSelecionada, setMarcaSelecionada] = useState<OpcaoMarca>('Todos')
  const [stageSelecionado, setStageSelecionado] = useState<Stage>(stages[0])

  const carrosFiltrados = marcaSelecionada === 'Todos'
    ? carros
    : carros.filter((carro) => carro.marca === marcaSelecionada)

  const desempenho = carroSelecionado?.desempenhoPorStage[stageSelecionado.id]
  const desempenhosDoCarro = carroSelecionado
    ? Object.values(carroSelecionado.desempenhoPorStage)
    : []
  const potenciaMaxima = carroSelecionado
    ? Math.max(carroSelecionado.potencia, ...desempenhosDoCarro.map((dados) => dados.potencia))
    : 0
  const torqueMaximo = carroSelecionado
    ? Math.max(carroSelecionado.torque, ...desempenhosDoCarro.map((dados) => dados.torque))
    : 0
  const nomeCarroSelecionado = carroSelecionado && (
    carroSelecionado.nome.startsWith(carroSelecionado.marca)
      ? carroSelecionado.nome
      : `${carroSelecionado.marca} ${carroSelecionado.nome}`
  )

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
              {carroSelecionado ? 'Carro selecionado' : 'Nenhum veículo selecionado'}
            </h2>

            {carroSelecionado && desempenho ? (
              <>
                <p className="simulation__subtitle">
                  {nomeCarroSelecionado} • {carroSelecionado.motor}
                </p>

                {/* IMAGEM DO CARRO */}
                <img
                  src={carroSelecionado.imagem}
                  alt={`${nomeCarroSelecionado} selecionado`}
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
                <div className="performance-grid">
                  <DesempenhoCard
                    titulo="Potência"
                    unidade="cv"
                    valorOriginal={carroSelecionado.potencia}
                    valorPreparado={desempenho.potencia}
                    valorMaximo={potenciaMaxima}
                  />
                  <DesempenhoCard
                    titulo="Torque"
                    unidade="Nm"
                    valorOriginal={carroSelecionado.torque}
                    valorPreparado={desempenho.torque}
                    valorMaximo={torqueMaximo}
                  />

                  {/* ACELERAÇÃO */}
                  <article className="performance-card">
                    <p className="performance-card__label">
                      0 a 100 km/h
                    </p>

                    <h4 className="performance-card__value">
                      {formatadorAceleracao.format(desempenho.aceleracao0a100)} s
                    </h4>
                  </article>

                  {/* CUSTO ESTIMADO */}
                  <article className="performance-card">
                    <p className="performance-card__label">
                      Custo estimado
                    </p>

                    <h4 className="performance-card__value">
                      {formatadorCusto.format(desempenho.custoEstimado).replace('\u00a0', ' ')}
                    </h4>
                  </article>
                </div>
              </>
            ) : (
              <p className="simulation__subtitle" role="status">
                Selecione um veículo no catálogo para visualizar os dados de preparação.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
