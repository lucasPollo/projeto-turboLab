import './App.css'
import FiltroMarcas from './components/FiltroMarcas'
import Footer from './components/Footer'
import Header from './components/Header'
import ListaCarros from './components/ListaCarros'
import ListaStages from './components/ListaStages'
import { carros } from './data/carros'
import { stages } from './data/stages'

function App() {
  const carroSelecionado = carros[0]

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
            <FiltroMarcas />

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
          <ListaCarros carros={carros} />
        </section>

        {/* SIMULAÇÃO DE PERFORMANCE */}
        <section id="simulacao" className="simulation">
          <div className="simulation__panel">
            {/* CARRO SELECIONADO */}
            <h2 className="simulation__title">
              Carro selecionado
            </h2>

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

            <ListaStages stages={stages} />

            {/* RESULTADOS DA PREPARAÇÃO */}
            <h3 className="simulation__section-title">
              Resultados da preparação • Stage 1
            </h3>

            <div className="performance-grid">
              {/* POTÊNCIA */}
              <article className="performance-card">
                <p className="performance-card__label">
                  Potência
                </p>

                <h4 className="performance-card__value">
                  265 cv
                </h4>

                <div className="performance-card__track">
                  <div className="performance-card__fill performance-card__fill--power" />
                </div>

                <p className="performance-card__gain">
                  +15,2%
                </p>
              </article>

              {/* TORQUE */}
              <article className="performance-card">
                <p className="performance-card__label">
                  Torque
                </p>

                <h4 className="performance-card__value">
                  420 Nm
                </h4>

                <div className="performance-card__track">
                  <div className="performance-card__fill performance-card__fill--torque" />
                </div>

                <p className="performance-card__gain">
                  +20%
                </p>
              </article>

              {/* ACELERAÇÃO */}
              <article className="performance-card">
                <p className="performance-card__label">
                  0 a 100 km/h
                </p>

                <h4 className="performance-card__value">
                  6,4 s
                </h4>
              </article>

              {/* CUSTO ESTIMADO */}
              <article className="performance-card">
                <p className="performance-card__label">
                  Custo estimado
                </p>

                <h4 className="performance-card__value">
                  R$ 2.000
                </h4>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
