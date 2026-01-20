import React from 'react'

function Header() {
  return (
    <>
    <header className="header js-header">
  <div className="header__bar js-header-bar">
    <div className="row justify-content-between align-items-center">

      {/* Logo */}
      <div className="col-auto z-5 js-header-item">
        <div className="header__item -margin-sm">
<div className="header__logo text-white js-header-logo">
  <a data-barba href="/">
    <img
      src="/img/logo1.png"
      alt="Logo"
      className="header__logo-img"
      style={{ height: "50px", width: "auto" }}
    />
  </a>
</div>
        </div>
      </div>

      {/* Menu */}
      <div className="menu js-menu">
        <div className="mobile__background js-mobile-bg"></div>

        <div className="menu__container">
          <ul className="nav js-navList">

            <li className="text-white">
              <a data-barba href="/">Home</a>
            </li>

            <li className="text-white">
              <a  href="/about-us">About Us</a>
            </li>

            <li className="text-white">
              <a href="/services">Services</a>
            </li>
            <li className="text-white">
              <a href="/catalogue">Catalogue</a>
            </li>
             <li className="text-white">
              <a  href="/shop">Products</a>
            </li>

            <li className="text-white">
              <a  href="/contact-us">Contact Us</a>
            </li>

          </ul>
        </div>

        {/* Mobile Footer */}
        <div className="mobile__footer js-mobile-footer">
          <div className="mobile__socials">
            {["facebook", "twitter", "instagram", "linkedin"].map((icon) => (
              <a data-barba href="#" key={icon}>
                <i className={`fa fa-${icon}`} aria-hidden="true"></i>
              </a>
            ))}
          </div>

          <div className="mobile__copyright">
            <img
              src="img/general/logo-light.svg"
              alt="logo"
              className="icon"
            />
            <p>© 2026 DecoWlls. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Header Icons */}
      <div className="col-auto z-5 sm:pos-unset js-header-item">
        <div className="header__icons">

          <div className="header__cart">
            <a data-barba href="#">
              {/* <i className="icon text-white icon-cart"></i> */}
            </a>
          </div>

          <div className="header__search">
            <button className="js-headerSearch-open">
              {/* <i className="icon text-white icon-search"></i> */}
            </button>
          </div>

          <div className="header__menu">
            <button
              type="button"
              className="nav-button-open md:d-none js-sidebar-open"
            >
              <i className="icon text-white icon-menu"></i>
            </button>

            <button
              type="button"
              className="nav-button-open d-none md:d-block js-nav-open"
            >
              <i className="icon text-white icon-menu"></i>
            </button>

            <button
              type="button"
              className="nav-button-close d-none md:d-block pointer-events-none js-nav-close"
            >
              <i className="icon text-white icon-cross"></i>
            </button>
          </div>
        </div>
      </div>

    </div>

    {/* Search */}
    <div className="headerSearch js-headerSearch">
      <div className="headerSearch__line"></div>
      <form action="#">
        <i className="headerSearch__icon icon-search"></i>
        <input type="search" placeholder="Type Your Search" />
      </form>
      <button className="headerSearch__close js-headerSearch-close">
        <i className="icon icon-cross text-white"></i>
      </button>
    </div>
  </div>
</header>

    </>
  )
}

export default Header