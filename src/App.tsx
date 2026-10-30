import './App.css'


function App() {
  return (
    <div className="app-shell">

      <header className="site-header">
        <div className="site-header__inner">


          <a href="#inicio" className="site-header__home">
            <img
              src="/logoTurboLab.png"
              alt="TurboLab"
              className="site-header__logo"
            />
          </a>


          <nav className="site-nav" aria-label="Navegação principal">
            <a
              href="#inicio"
              className="site-nav__link"
            >
              INÍCIO
            </a>

            <a
              href="#catalogo"
              className="site-nav__link"
            >
              CATÁLOGO
            </a>

            <a
              href="#simulacao"
              className="site-nav__link"
            >
              SIMULAÇÃO
            </a>
          </nav>


          <div className="mobile-menu" aria-hidden="true">
            <span className="mobile-menu__bar" />
            <span className="mobile-menu__bar" />
            <span className="mobile-menu__bar" />
          </div>
        </div>
      </header>

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
        <section
          id="catalogo"
          className="catalog"
        >
          <h2 className="catalog__title">
            Catálogo de carros
          </h2>

          <p className="catalog__intro">
            Escolha entre 12 modelos disponíveis
          </p>

          {/* FILTROS */}
          <div className="catalog__controls">
          <div className="brand-filters" aria-label="Filtrar por marca">
            <button
              type="button"
              className="brand-filter brand-filter--active"
            >
              Todos
            </button>

            <button
              type="button"
              className="brand-filter"
            >
              Volkswagen
            </button>

            <button
              type="button"
              className="brand-filter"
            >
              BMW
            </button>

            <button
              type="button"
              className="brand-filter"
            >
              Audi
            </button>
          </div>

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
          <div className="vehicle-grid">

            {/* GOLF GTI */}
            <article className="vehicle-card vehicle-card--selected">
              <img
                src="/carros/golf-gti.png"
                alt="Volkswagen Golf GTI"
                className="vehicle-card__image"
              />
              <h3 className="vehicle-card__title">Golf GTI</h3>
              <p className="vehicle-card__engine">Motor: 2.0 TSI Turbo</p>
              <p className="vehicle-card__power">Potência: 230 cv</p>
              <p className="vehicle-card__torque">Torque: 350 Nm</p>
              <button type="button" className="vehicle-card__button vehicle-card__button--selected">
                ✓ Selecionado
              </button>
            </article>

            {/* JETTA GLI */}
            <article className="vehicle-card">
              <img
                src="/carros/jetta-gli.png"
                alt="Volkswagen Jetta GLI"
                className="vehicle-card__image"
              />
              <h3 className="vehicle-card__title">Jetta GLI</h3>
              <p className="vehicle-card__engine">Motor: 2.0 TSI Turbo</p>
              <p className="vehicle-card__power">Potência: 230 cv</p>
              <p className="vehicle-card__torque">Torque: 350 Nm</p>
              <button type="button" className="vehicle-card__button">
                Selecionar veículo
              </button>
            </article>

            {/* POLO GTS */}
            <article className="vehicle-card">
              <img
                src="/carros/polo-gts.png"
                alt="Volkswagen Polo GTS"
                className="vehicle-card__image"
              />
              <h3 className="vehicle-card__title">Polo GTS</h3>
              <p className="vehicle-card__engine">Motor: 1.4 TSI Turbo</p>
              <p className="vehicle-card__power">Potência: 150 cv</p>
              <p className="vehicle-card__torque">Torque: 250 Nm</p>
              <button type="button" className="vehicle-card__button">
                Selecionar veículo
              </button>
            </article>

            {/* TIGUAN R-LINE */}
            <article className="vehicle-card">
              <img
                src="/carros/tiguan-rline.png"
                alt="Volkswagen Tiguan R-Line"
                className="vehicle-card__image"
              />
              <h3 className="vehicle-card__title">Tiguan R-Line</h3>
              <p className="vehicle-card__engine">Motor: 2.0 TSI Turbo</p>
              <p className="vehicle-card__power">Potência: 220 cv</p>
              <p className="vehicle-card__torque">Torque: 350 Nm</p>
              <button type="button" className="vehicle-card__button">
                Selecionar veículo
              </button>
            </article>

            {/* BMW 320i */}
            <article className="vehicle-card">
              <img
                src="/carros/bmw-320i.png"
                alt="BMW 320i"
                className="vehicle-card__image"
              />
              <h3 className="vehicle-card__title">BMW 320i</h3>
              <p className="vehicle-card__engine">Motor: 2.0 Turbo</p>
              <p className="vehicle-card__power">Potência: 184 cv</p>
              <p className="vehicle-card__torque">Torque: 300 Nm</p>
              <button type="button" className="vehicle-card__button">
                Selecionar veículo
              </button>
            </article>

            {/* BMW 330i */}
            <article className="vehicle-card">
              <img
                src="/carros/bmw-330i.png"
                alt="BMW 330i"
                className="vehicle-card__image"
              />
              <h3 className="vehicle-card__title">BMW 330i</h3>
              <p className="vehicle-card__engine">Motor: 2.0 Turbo</p>
              <p className="vehicle-card__power">Potência: 258 cv</p>
              <p className="vehicle-card__torque">Torque: 400 Nm</p>
              <button type="button" className="vehicle-card__button">
                Selecionar veículo
              </button>
            </article>

            {/* BMW M340i */}
            <article className="vehicle-card">
              <img
                src="/carros/bmw-m340i.png"
                alt="BMW M340i"
                className="vehicle-card__image"
              />
              <h3 className="vehicle-card__title">BMW M340i</h3>
              <p className="vehicle-card__engine">Motor: 3.0 Turbo</p>
              <p className="vehicle-card__power">Potência: 387 cv</p>
              <p className="vehicle-card__torque">Torque: 500 Nm</p>
              <button type="button" className="vehicle-card__button">
                Selecionar veículo
              </button>
            </article>

            {/* BMW 118i */}
            <article className="vehicle-card">
              <img
                src="/carros/bmw-118i.png"
                alt="BMW 118i"
                className="vehicle-card__image"
              />
              <h3 className="vehicle-card__title">BMW 118i</h3>
              <p className="vehicle-card__engine">Motor: 1.5 Turbo</p>
              <p className="vehicle-card__power">Potência: 140 cv</p>
              <p className="vehicle-card__torque">Torque: 220 Nm</p>
              <button type="button" className="vehicle-card__button">
                Selecionar veículo
              </button>
            </article>

            {/* AUDI A3 */}
            <article className="vehicle-card">
              <img
                src="/carros/audi-a3.png"
                alt="Audi A3"
                className="vehicle-card__image"
              />
              <h3 className="vehicle-card__title">Audi A3</h3>
              <p className="vehicle-card__engine">Motor: 2.0 TFSI</p>
              <p className="vehicle-card__power">Potência: 190 cv</p>
              <p className="vehicle-card__torque">Torque: 320 Nm</p>
              <button type="button" className="vehicle-card__button">
                Selecionar veículo
              </button>
            </article>

            {/* AUDI A4 */}
            <article className="vehicle-card">
              <img
                src="/carros/audi-a4.png"
                alt="Audi A4"
                className="vehicle-card__image"
              />
              <h3 className="vehicle-card__title">Audi A4</h3>
              <p className="vehicle-card__engine">Motor: 2.0 TFSI</p>
              <p className="vehicle-card__power">Potência: 204 cv</p>
              <p className="vehicle-card__torque">Torque: 320 Nm</p>
              <button type="button" className="vehicle-card__button">
                Selecionar veículo
              </button>
            </article>

            {/* AUDI S3 */}
            <article className="vehicle-card">
              <img
                src="/carros/audi-s3.png"
                alt="Audi S3"
                className="vehicle-card__image"
              />
              <h3 className="vehicle-card__title">Audi S3</h3>
              <p className="vehicle-card__engine">Motor: 2.0 TFSI Turbo</p>
              <p className="vehicle-card__power">Potência: 310 cv</p>
              <p className="vehicle-card__torque">Torque: 400 Nm</p>
              <button type="button" className="vehicle-card__button">
                Selecionar veículo
              </button>
            </article>

            {/* AUDI Q3 */}
            <article className="vehicle-card">
              <img
                src="/carros/audi-q3.png"
                alt="Audi Q3"
                className="vehicle-card__image"
              />
              <h3 className="vehicle-card__title">Audi Q3</h3>
              <p className="vehicle-card__engine">Motor: 2.0 TFSI</p>
              <p className="vehicle-card__power">Potência: 180 cv</p>
              <p className="vehicle-card__torque">Torque: 320 Nm</p>
              <button type="button" className="vehicle-card__button">
                Selecionar veículo
              </button>
            </article>

          </div>
        </section>

        {/* SIMULAÇÃO DE PERFORMANCE */}
        <section
          id="simulacao"
          className="simulation"
        >
          <div className="simulation__panel">

            {/* CARRO SELECIONADO */}
            <h2 className="simulation__title">
              Carro selecionado
            </h2>

            <p className="simulation__subtitle">
              Volkswagen Golf GTI • 2.0 TSI Turbo
            </p>

            {/* IMAGEM DO CARRO */}
            <img
              src="/carros/golf-gti.png"
              alt="Volkswagen Golf GTI selecionado"
              className="simulation__image"
            />

            {/* DADOS ORIGINAIS */}
            <div className="simulation__original">
              <span className="simulation__original-label">
                Original
              </span>
              <span>230 cv</span>
              <span>•</span>
              <span>350 Nm</span>
            </div>

            {/* LISTAGEM DE STAGES */}
            <h3 className="simulation__section-title">
              Selecione um Stage
            </h3>

            <div className="stage-grid">

              {/* STAGE 1 */}
              <article className="stage-card stage-card--selected">
                <h4 className="stage-card__title">
                  STAGE 1
                </h4>
                <p className="stage-card__description">
                  Remap
                </p>
              </article>

              {/* STAGE 2 */}
              <article className="stage-card">
                <h4 className="stage-card__title">
                  STAGE 2
                </h4>
                <p className="stage-card__description">
                  Intermediário
                </p>
              </article>

              {/* STAGE 3 */}
              <article className="stage-card">
                <h4 className="stage-card__title">
                  STAGE 3
                </h4>
                <p className="stage-card__description">
                  Avançado
                </p>
              </article>

            </div>

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

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="site-footer__inner">

            {/* LOGO */}
            <a href="#inicio" aria-label="Voltar ao início">
              <img
                src="/logoTurboLab.png"
                alt="TurboLab"
                className="site-footer__logo"
              />
            </a>

            {/* FRASE */}
            <p className="site-footer__tagline">
              Explore o potencial do seu carro.
            </p>

          </div>
        </footer>
    </div>
  )
}

export default App
