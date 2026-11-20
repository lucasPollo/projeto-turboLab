function Header() {
  return (
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
          <a href="#inicio" className="site-nav__link">
            INÍCIO
          </a>

          <a href="#catalogo" className="site-nav__link">
            CATÁLOGO
          </a>

          <a href="#simulacao" className="site-nav__link">
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
  )
}

export default Header
