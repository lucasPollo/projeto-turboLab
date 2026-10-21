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

      </main>
    </div>
  )
}

export default App
