import './index.css'


function App() {
  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#202832]">

      <header className="bg-[#1D2733] text-white">
        <div className="flex h-[68px] w-full items-center justify-between px-5 md:px-8 lg:px-10">


          <a href="#inicio" className="flex items-center ">
            <img
              src="/logoTurboLab.png"
              alt="TurboLab"
              className="h-auto w-28 object-contain md:w-36 lg:w-40"
            />
          </a>


          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="#inicio"
              className="text-xs font-semibold text-white hover:text-blue-400"
            >
              INÍCIO
            </a>

            <a
              href="#catalogo"
              className="text-xs font-semibold text-white hover:text-blue-400"
            >
              CATÁLOGO
            </a>

            <a
              href="#simulacao"
              className="text-xs font-semibold text-white hover:text-blue-400"
            >
              SIMULAÇÃO
            </a>
          </nav>


          <div
            className="flex flex-col gap-1.5 md:hidden"
            aria-hidden="true"
          >
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
          </div>
        </div>
      </header>

      <main>

        <section
          id="inicio"
          className="relative min-h-[260px] overflow-hidden bg-cover bg-[position:45%_65%] md:min-h-[320px] md:bg-[position:center_65%]"
          style={{
            backgroundImage: "url('/imagemFundoHero.jpg')",
          }}
        >

          <div className="absolute inset-0 bg-gradient-to-r from-[#101923]/90 via-[#101923]/65 to-[#101923]/20" />
          <div className="relative z-10 w-full px-5 pt-8 md:px-8 md:pt-9 lg:px-10">
            <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              Descubra o potencial do seu carro
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-200">
              Escolha seu carro, compare os três níveis de Stage
              e veja as mudanças estimadas de desempenho.
            </p>
          </div>
        </section>


        {/* CATÁLOGO DE CARROS */}
        <section
          id="catalogo"
          className="bg-[#F6F8FB] px-5 py-10 md:px-8 lg:px-10"
        >
          <h2 className="text-2xl font-bold text-[#202832]">
            Catálogo de carros
          </h2>

          <p className="mt-2 text-sm text-[#718096]">
            Escolha entre 12 modelos disponíveis
          </p>

          {/* FILTROS */}
          <div className="mt-5 grid grid-cols-4 gap-2 md:max-w-[440px]">
            <button
              type="button"
              className="rounded-md bg-[#1D2733] px-2 py-2.5 text-[10px] font-medium text-white sm:text-xs"
            >
              Todos
            </button>

            <button
              type="button"
              className="rounded-md border border-[#DEE5ED] bg-white px-2 py-2.5 text-[10px] font-medium text-[#718096] sm:text-xs"
            >
              Volkswagen
            </button>

            <button
              type="button"
              className="rounded-md border border-[#DEE5ED] bg-white px-2 py-2.5 text-[10px] font-medium text-[#718096] sm:text-xs"
            >
              BMW
            </button>

            <button
              type="button"
              className="rounded-md border border-[#DEE5ED] bg-white px-2 py-2.5 text-[10px] font-medium text-[#718096] sm:text-xs"
            >
              Audi
            </button>
          </div>

          {/* BUSCA */}
          <div className="mt-4">
            <label htmlFor="buscar-carro" className="sr-only">
              Buscar veículo
            </label>

            <input
              id="buscar-carro"
              type="search"
              placeholder="⌕  Buscar veículo por nome..."
              className="w-full rounded-lg border border-[#DEE5ED] bg-white px-4 py-3 text-sm text-[#202832] placeholder:text-[#718096] focus:border-[#008CFF] focus:outline-none"
            />
          </div>

          {/* GRID DE VEÍCULOS */}
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

            {/* GOLF GTI */}
            <article className="rounded-xl border border-[#DEE5ED] bg-white p-3 shadow-sm">
              <img
                src="/carros/golf-gti.png"
                alt="Volkswagen Golf GTI"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-bold">Golf GTI</h3>
              <p className="mt-1 text-xs text-[#718096]">Motor: 2.0 TSI Turbo</p>
              <p className="mt-2 text-sm">Potência: 230 cv</p>
              <p className="text-sm">Torque: 350 Nm</p>
              <button type="button" className="mt-3 w-full rounded-md bg-[#1D2733] px-3 py-2 text-left text-xs font-medium text-white">
                ✓ Selecionado
              </button>
            </article>

            {/* JETTA GLI */}
            <article className="rounded-xl border border-[#DEE5ED] bg-white p-3 shadow-sm">
              <img
                src="/carros/jetta-gli.png"
                alt="Volkswagen Jetta GLI"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-bold">Jetta GLI</h3>
              <p className="mt-1 text-xs text-[#718096]">Motor: 2.0 TSI Turbo</p>
              <p className="mt-2 text-sm">Potência: 230 cv</p>
              <p className="text-sm">Torque: 350 Nm</p>
              <button type="button" className="mt-3 w-full rounded-md bg-[#ECF1F5] px-3 py-2 text-left text-xs font-medium text-[#326797]">
                Selecionar veículo
              </button>
            </article>

            {/* POLO GTS */}
            <article className="rounded-xl border border-[#DEE5ED] bg-white p-3 shadow-sm">
              <img
                src="/carros/polo-gts.png"
                alt="Volkswagen Polo GTS"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-bold">Polo GTS</h3>
              <p className="mt-1 text-xs text-[#718096]">Motor: 1.4 TSI Turbo</p>
              <p className="mt-2 text-sm">Potência: 150 cv</p>
              <p className="text-sm">Torque: 250 Nm</p>
              <button type="button" className="mt-3 w-full rounded-md bg-[#ECF1F5] px-3 py-2 text-left text-xs font-medium text-[#326797]">
                Selecionar veículo
              </button>
            </article>

            {/* TIGUAN R-LINE */}
            <article className="rounded-xl border border-[#DEE5ED] bg-white p-3 shadow-sm">
              <img
                src="/carros/tiguan-rline.png"
                alt="Volkswagen Tiguan R-Line"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-bold">Tiguan R-Line</h3>
              <p className="mt-1 text-xs text-[#718096]">Motor: 2.0 TSI Turbo</p>
              <p className="mt-2 text-sm">Potência: 220 cv</p>
              <p className="text-sm">Torque: 350 Nm</p>
              <button type="button" className="mt-3 w-full rounded-md bg-[#ECF1F5] px-3 py-2 text-left text-xs font-medium text-[#326797]">
                Selecionar veículo
              </button>
            </article>

            {/* BMW 320i */}
            <article className="rounded-xl border border-[#DEE5ED] bg-white p-3 shadow-sm">
              <img
                src="/carros/bmw-320i.png"
                alt="BMW 320i"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-bold">BMW 320i</h3>
              <p className="mt-1 text-xs text-[#718096]">Motor: 2.0 Turbo</p>
              <p className="mt-2 text-sm">Potência: 184 cv</p>
              <p className="text-sm">Torque: 300 Nm</p>
              <button type="button" className="mt-3 w-full rounded-md bg-[#ECF1F5] px-3 py-2 text-left text-xs font-medium text-[#326797]">
                Selecionar veículo
              </button>
            </article>

            {/* BMW 330i */}
            <article className="rounded-xl border border-[#DEE5ED] bg-white p-3 shadow-sm">
              <img
                src="/carros/bmw-330i.png"
                alt="BMW 330i"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-bold">BMW 330i</h3>
              <p className="mt-1 text-xs text-[#718096]">Motor: 2.0 Turbo</p>
              <p className="mt-2 text-sm">Potência: 258 cv</p>
              <p className="text-sm">Torque: 400 Nm</p>
              <button type="button" className="mt-3 w-full rounded-md bg-[#ECF1F5] px-3 py-2 text-left text-xs font-medium text-[#326797]">
                Selecionar veículo
              </button>
            </article>

            {/* BMW M340i */}
            <article className="rounded-xl border border-[#DEE5ED] bg-white p-3 shadow-sm">
              <img
                src="/carros/bmw-m340i.png"
                alt="BMW M340i"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-bold">BMW M340i</h3>
              <p className="mt-1 text-xs text-[#718096]">Motor: 3.0 Turbo</p>
              <p className="mt-2 text-sm">Potência: 387 cv</p>
              <p className="text-sm">Torque: 500 Nm</p>
              <button type="button" className="mt-3 w-full rounded-md bg-[#ECF1F5] px-3 py-2 text-left text-xs font-medium text-[#326797]">
                Selecionar veículo
              </button>
            </article>

            {/* BMW 118i */}
            <article className="rounded-xl border border-[#DEE5ED] bg-white p-3 shadow-sm">
              <img
                src="/carros/bmw-118i.png"
                alt="BMW 118i"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-bold">BMW 118i</h3>
              <p className="mt-1 text-xs text-[#718096]">Motor: 1.5 Turbo</p>
              <p className="mt-2 text-sm">Potência: 140 cv</p>
              <p className="text-sm">Torque: 220 Nm</p>
              <button type="button" className="mt-3 w-full rounded-md bg-[#ECF1F5] px-3 py-2 text-left text-xs font-medium text-[#326797]">
                Selecionar veículo
              </button>
            </article>

            {/* AUDI A3 */}
            <article className="rounded-xl border border-[#DEE5ED] bg-white p-3 shadow-sm">
              <img
                src="/carros/audi-a3.png"
                alt="Audi A3"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-bold">Audi A3</h3>
              <p className="mt-1 text-xs text-[#718096]">Motor: 2.0 TFSI</p>
              <p className="mt-2 text-sm">Potência: 190 cv</p>
              <p className="text-sm">Torque: 320 Nm</p>
              <button type="button" className="mt-3 w-full rounded-md bg-[#ECF1F5] px-3 py-2 text-left text-xs font-medium text-[#326797]">
                Selecionar veículo
              </button>
            </article>

            {/* AUDI A4 */}
            <article className="rounded-xl border border-[#DEE5ED] bg-white p-3 shadow-sm">
              <img
                src="/carros/audi-a4.png"
                alt="Audi A4"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-bold">Audi A4</h3>
              <p className="mt-1 text-xs text-[#718096]">Motor: 2.0 TFSI</p>
              <p className="mt-2 text-sm">Potência: 204 cv</p>
              <p className="text-sm">Torque: 320 Nm</p>
              <button type="button" className="mt-3 w-full rounded-md bg-[#ECF1F5] px-3 py-2 text-left text-xs font-medium text-[#326797]">
                Selecionar veículo
              </button>
            </article>

            {/* AUDI S3 */}
            <article className="rounded-xl border border-[#DEE5ED] bg-white p-3 shadow-sm">
              <img
                src="/carros/audi-s3.png"
                alt="Audi S3"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-bold">Audi S3</h3>
              <p className="mt-1 text-xs text-[#718096]">Motor: 2.0 TFSI Turbo</p>
              <p className="mt-2 text-sm">Potência: 310 cv</p>
              <p className="text-sm">Torque: 400 Nm</p>
              <button type="button" className="mt-3 w-full rounded-md bg-[#ECF1F5] px-3 py-2 text-left text-xs font-medium text-[#326797]">
                Selecionar veículo
              </button>
            </article>

            {/* AUDI Q3 */}
            <article className="rounded-xl border border-[#DEE5ED] bg-white p-3 shadow-sm">
              <img
                src="/carros/audi-q3.png"
                alt="Audi Q3"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-bold">Audi Q3</h3>
              <p className="mt-1 text-xs text-[#718096]">Motor: 2.0 TFSI</p>
              <p className="mt-2 text-sm">Potência: 180 cv</p>
              <p className="text-sm">Torque: 320 Nm</p>
              <button type="button" className="mt-3 w-full rounded-md bg-[#ECF1F5] px-3 py-2 text-left text-xs font-medium text-[#326797]">
                Selecionar veículo
              </button>
            </article>

          </div>
        </section>

        {/* SIMULAÇÃO DE PERFORMANCE */}
        <section
          id="simulacao"
          className="bg-[#F6F8FB] px-5 pb-10 md:px-8 lg:px-10"
        >
          <div className="rounded-xl border border-[#DEE5ED] bg-white p-4 shadow-sm md:p-5">

            {/* CARRO SELECIONADO */}
            <h2 className="text-2xl font-bold text-[#202832]">
              Carro selecionado
            </h2>

            <p className="mt-2 text-sm text-[#718096]">
              Volkswagen Golf GTI • 2.0 TSI Turbo
            </p>

            {/* IMAGEM DO CARRO */}
            <img
              src="/carros/golf-gti.png"
              alt="Volkswagen Golf GTI selecionado"
              className="mt-4 h-[180px] w-full rounded-lg object-cover md:h-[260px] lg:h-[320px]"
            />

            {/* DADOS ORIGINAIS */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[#718096]">
              <span className="font-semibold uppercase">
                Original
              </span>
              <span>230 cv</span>
              <span>•</span>
              <span>350 Nm</span>
            </div>

            {/* LISTAGEM DE STAGES */}
            <h3 className="mt-5 text-lg font-bold text-[#202832]">
              Selecione um Stage
            </h3>

            <div className="mt-3 grid grid-cols-3 gap-2">

              {/* STAGE 1 */}
              <article className="rounded-lg border border-[#1D2733] bg-[#1D2733] p-3 text-white">
                <h4 className="text-xs font-bold md:text-sm">
                  STAGE 1
                </h4>
                <p className="mt-1 text-[10px] text-gray-300 md:text-xs">
                  Remap
                </p>
              </article>

              {/* STAGE 2 */}
              <article className="rounded-lg border border-[#DEE5ED] bg-white p-3">
                <h4 className="text-xs font-bold text-[#202832] md:text-sm">
                  STAGE 2
                </h4>
                <p className="mt-1 text-[10px] text-[#718096] md:text-xs">
                  Intermediário
                </p>
              </article>

              {/* STAGE 3 */}
              <article className="rounded-lg border border-[#DEE5ED] bg-white p-3">
                <h4 className="text-xs font-bold text-[#202832] md:text-sm">
                  STAGE 3
                </h4>
                <p className="mt-1 text-[10px] text-[#718096] md:text-xs">
                  Avançado
                </p>
              </article>

            </div>

            {/* RESULTADOS DA PREPARAÇÃO */}
            <h3 className="mt-5 text-lg font-bold text-[#202832]">
              Resultados da preparação • Stage 1
            </h3>

            <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">

              {/* POTÊNCIA */}
              <article className="rounded-lg border border-[#DEE5ED] bg-white p-3">
                <p className="text-xs text-[#718096]">
                  Potência
                </p>

                <h4 className="mt-1 text-xl font-bold text-[#202832]">
                  265 cv
                </h4>

                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#718096]">
                  <div className="h-full w-[65%] bg-[#326797]" />
                </div>

                <p className="mt-1 text-right text-[10px] text-[#718096]">
                  +15,2%
                </p>
              </article>

              {/* TORQUE */}
              <article className="rounded-lg border border-[#DEE5ED] bg-white p-3">
                <p className="text-xs text-[#718096]">
                  Torque
                </p>

                <h4 className="mt-1 text-xl font-bold text-[#202832]">
                  420 Nm
                </h4>

                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[#718096]">
                  <div className="h-full w-[70%] bg-[#326797]" />
                </div>

                <p className="mt-1 text-right text-[10px] text-[#718096]">
                  +20%
                </p>
              </article>

              {/* ACELERAÇÃO */}
              <article className="rounded-lg border border-[#DEE5ED] bg-white p-3">
                <p className="text-xs text-[#718096]">
                  0 a 100 km/h
                </p>

                <h4 className="mt-1 text-xl font-bold text-[#202832]">
                  6,4 s
                </h4>
              </article>

              {/* CUSTO ESTIMADO */}
              <article className="rounded-lg border border-[#DEE5ED] bg-white p-3">
                <p className="text-xs text-[#718096]">
                  Custo estimado
                </p>

                <h4 className="mt-1 text-xl font-bold text-[#202832]">
                  R$ 2.000
                </h4>
              </article>

            </div>
          </div>
        </section>
        </main>

        {/* FOOTER */}
        <footer className="bg-[#1D2733] text-white">
          <div className="flex flex-col items-center justify-center gap-3 px-5 py-8 text-center md:flex-row md:justify-between md:px-8 md:py-10 md:text-left lg:px-10 lg:py-12">

            {/* LOGO */}
            <a href="#inicio" aria-label="Voltar ao início">
              <img
                src="/logoTurboLab.png"
                alt="TurboLab"
                className="h-auto w-32 object-contain md:w-40 lg:w-44"
              />
            </a>

            {/* FRASE */}
            <p className="text-xs font-semibold text-white md:text-sm">
              Explore o potencial do seu carro.
            </p>

          </div>
        </footer>
    </div>
  )
}

export default App
