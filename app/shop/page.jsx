import React from 'react'

function page() {
  return (
    <>
    {/* preloader start */}
<div className="preloader js-preloader">
  <div className="preloader__bg"></div>

  <div className="preloader__progress">
    <div className="preloader__progress__inner"></div>
    <img
      src="img/general/loader.svg"
      alt="preloader image"
      className="preloader__img"
    />
  </div>
</div>
{/* preloader end */}

{/* cursor start */}
<div className="cursor js-cursor">
  <div className="cursor__wrapper">
    <div className="cursor__follower js-follower"></div>
    <div className="cursor__label js-label"></div>
    <div className="cursor__icon js-icon"></div>
  </div>
</div>
{/* cursor end */}



  <div className="barba-container" data-barba="container">
  <main className="main-content ">
  
{/* header start */}
<header className="header js-header">
  <div className="header__bar js-header-bar">
    <div className="row justify-content-between align-items-center">

      {/* Logo */}
      <div className="col-auto z-5 js-header-item">
        <div className="header__item -margin-sm">
          <div className="header__logo text-white js-header-logo">
            <a data-barba href="/">
              <i className="icon icon-logo"></i>
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
              <a  href="/shop">Shop</a>
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
            <p>© 2021 Hellix. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Header Icons */}
      <div className="col-auto z-5 sm:pos-unset js-header-item">
        <div className="header__icons">

          <div className="header__cart">
            <a data-barba href="#">
              <i className="icon text-white icon-cart"></i>
            </a>
          </div>

          <div className="header__search">
            <button className="js-headerSearch-open">
              <i className="icon text-white icon-search"></i>
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
{/* header end */}
  
  
    <div className="content-wrapper  js-content-wrapper">
      
      <aside className="sidebar js-sidebar">
      <div className="sidebar__cross">
        <button className="button js-sidebar-close">
          <i className="icon icon-cross"></i>
        </button>
      </div>
    
      <div className="sidebar__header">
        <div className="sidebar__logo">
          <img src="img/general/logo-light.svg" alt="helix logo" />
        </div>
    
        <h4 className="title">HELLIX</h4>
        <p className="subtitle">AN-AWARD WINNING ARCHITECTURE COMPANY</p>
      </div>
    
      <div className="sidebar__instagram">
        <h5 className="title">#hellix</h5>
    
        <div className="instagram">
    
          <a data-barba href="#" className="instagram__item">
            <div className="instagram__image">
              <div
                className="ratio ratio-1:1 bg-image js-lazy"
                data-bg="img/main-sidebar/instagram/1.jpg"
              ></div>
            </div>
            <div className="instagram__content">
              <i className="icon fa fa-instagram" aria-hidden="true"></i>
            </div>
          </a>
    
          <a data-barba href="#" className="instagram__item">
            <div className="instagram__image">
              <div
                className="ratio ratio-1:1 bg-image js-lazy"
                data-bg="img/main-sidebar/instagram/2.jpg"
              ></div>
            </div>
            <div className="instagram__content">
              <i className="icon fa fa-instagram" aria-hidden="true"></i>
            </div>
          </a>
    
          <a data-barba href="#" className="instagram__item">
            <div className="instagram__image">
              <div
                className="ratio ratio-1:1 bg-image js-lazy"
                data-bg="img/main-sidebar/instagram/3.jpg"
              ></div>
            </div>
            <div className="instagram__content">
              <i className="icon fa fa-instagram" aria-hidden="true"></i>
            </div>
          </a>
    
          <a data-barba href="#" className="instagram__item">
            <div className="instagram__image">
              <div
                className="ratio ratio-1:1 bg-image js-lazy"
                data-bg="img/main-sidebar/instagram/4.jpg"
              ></div>
            </div>
            <div className="instagram__content">
              <i className="icon fa fa-instagram" aria-hidden="true"></i>
            </div>
          </a>
    
          <a data-barba href="#" className="instagram__item">
            <div className="instagram__image">
              <div
                className="ratio ratio-1:1 bg-image js-lazy"
                data-bg="img/main-sidebar/instagram/5.jpg"
              ></div>
            </div>
            <div className="instagram__content">
              <i className="icon fa fa-instagram" aria-hidden="true"></i>
            </div>
          </a>
    
          <a data-barba href="#" className="instagram__item">
            <div className="instagram__image">
              <div
                className="ratio ratio-1:1 bg-image js-lazy"
                data-bg="img/main-sidebar/instagram/6.jpg"
              ></div>
            </div>
            <div className="instagram__content">
              <i className="icon fa fa-instagram" aria-hidden="true"></i>
            </div>
          </a>
    
        </div>
      </div>
    
      <div className="sidebar__info">
        <h5 className="title">Let's Start a Project</h5>
        <p className="text">
          T: +1 333 436 1747<br />
          M: hi@hellix.com
        </p>
        <p className="text">
          A: PO Box 16122 Collins Street West<br />
          Victoria 8007 Australia
        </p>
    
        <button className="button -simple">GET DIRECTIONS</button>
      </div>
    
      <div className="sidebar__socials">
        <div className="item">
          <a data-barba href="#">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </div>
        <div className="item">
          <a data-barba href="#">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
        <div className="item">
          <a data-barba href="#">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
        <div className="item">
          <a data-barba href="#">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </aside>
    
    <section className="page-masthead">
      <div data-parallax="0.6" className="page-masthead__bg">
        <div
          data-parallax-target
          className="bg-image js-lazy"
          data-bg="img/backgrounds/6.jpg"
        ></div>
      </div>
    
      <div className="container">
        <div className="page-masthead__content">
          <div className="row justify-content-between md:justify-content-center align-items-center">
    
            <div className="col-lg-9 col-md-10">
              <div data-anim="slide-up delay-1">
                <div className="page-masthead__subtitle">
                  explore the features
                </div>
                <div className="page-masthead__back_title">
                 Our Products
                </div>
                <h1 className="page-masthead__title text-white">
                 Our Products
                </h1>
              </div>
            </div>
    
            <div className="col-auto">
              <div
                data-anim="slide-up delay-1"
                className="page-masthead-bread text-white md:mt-24"
              >
                <a
                  data-barba
                  href="index.html"
                  className="page-masthead-bread__item"
                >
                  Home
                </a>
                {" / "}
                <a
                  data-barba
                  href="#"
                  className="page-masthead-bread__item"
                >
                 Our Products
                </a>
              </div>
            </div>
    
          </div>
        </div>
      </div>
    </section>
    
    
    <section className="layout-pt-md layout-pb-md bg-dark">
      <div className="container">
    
        <div className="row justify-content-between">
          <div className="col-auto">
            <div className="sectionHeading -left-line">
              <span className="sectionHeading__subtitle">PROJECTS</span>
              <h2 className="sectionHeading__title text-white">
                Featured Works
              </h2>
            </div>
          </div>
        </div>
    
        <div className="row layout-pt-sm">
          <div
            className="sectionSlider overflow-hidden sm:px-16 js-sectionSlider"
            data-gap="30"
            data-slider-col="base-3 lg-3 md-2 sm-1"
            data-pagination
          >
    
            <div className="swiper-wrapper">
    
              <div className="swiper-slide">
                <a data-barba href="#" className="portfolioCard -type-1 ratio">
                  <div className="portfolioCard__image ratio ratio-3:4">
                    <img
                      className="ratio-img js-lazy"
                      src="#"
                      data-src="img/portfolio/cards/1.jpg"
                      alt="project image"
                    />
                  </div>
                  <div className="portfolioCard__content px-30 py-30">
                    <span className="portfolioCard__category text-sm uppercase text-beige-dark">
                      LIVING
                    </span>
                    <h3 className="portfolioCard__title text-lg fw-600 mt-8">
                      London Apartments
                    </h3>
                  </div>
                </a>
              </div>
    
              <div className="swiper-slide">
                <a data-barba href="#" className="portfolioCard -type-1 ratio">
                  <div className="portfolioCard__image ratio ratio-3:4">
                    <img
                      className="ratio-img js-lazy"
                      src="#"
                      data-src="img/portfolio/cards/2.jpg"
                      alt="project image"
                    />
                  </div>
                  <div className="portfolioCard__content px-30 py-30">
                    <span className="portfolioCard__category text-sm uppercase text-beige-dark">
                      LIVING
                    </span>
                    <h3 className="portfolioCard__title text-lg fw-600 mt-8">
                      London Apartments
                    </h3>
                  </div>
                </a>
              </div>
    
              <div className="swiper-slide">
                <a data-barba href="#" className="portfolioCard -type-1 ratio">
                  <div className="portfolioCard__image ratio ratio-3:4">
                    <img
                      className="ratio-img js-lazy"
                      src="#"
                      data-src="img/portfolio/cards/3.jpg"
                      alt="project image"
                    />
                  </div>
                  <div className="portfolioCard__content px-30 py-30">
                    <span className="portfolioCard__category text-sm uppercase text-beige-dark">
                      LIVING
                    </span>
                    <h3 className="portfolioCard__title text-lg fw-600 mt-8">
                      London Apartments
                    </h3>
                  </div>
                </a>
              </div>
    
              <div className="swiper-slide">
                <a data-barba href="#" className="portfolioCard -type-1 ratio">
                  <div className="portfolioCard__image ratio ratio-3:4">
                    <img
                      className="ratio-img js-lazy"
                      src="#"
                      data-src="img/portfolio/cards/4.jpg"
                      alt="project image"
                    />
                  </div>
                  <div className="portfolioCard__content px-30 py-30">
                    <span className="portfolioCard__category text-sm uppercase text-beige-dark">
                      LIVING
                    </span>
                    <h3 className="portfolioCard__title text-lg fw-600 mt-8">
                      London Apartments
                    </h3>
                  </div>
                </a>
              </div>
    
              <div className="swiper-slide">
                <a data-barba href="#" className="portfolioCard -type-1 ratio">
                  <div className="portfolioCard__image ratio ratio-3:4">
                    <img
                      className="ratio-img js-lazy"
                      src="#"
                      data-src="img/portfolio/cards/1.jpg"
                      alt="project image"
                    />
                  </div>
                  <div className="portfolioCard__content px-30 py-30">
                    <span className="portfolioCard__category text-sm uppercase text-beige-dark">
                      LIVING
                    </span>
                    <h3 className="portfolioCard__title text-lg fw-600 mt-8">
                      London Apartments
                    </h3>
                  </div>
                </a>
              </div>
    
              <div className="swiper-slide">
                <a data-barba href="#" className="portfolioCard -type-1 ratio">
                  <div className="portfolioCard__image ratio ratio-3:4">
                    <img
                      className="ratio-img js-lazy"
                      src="#"
                      data-src="img/portfolio/cards/2.jpg"
                      alt="project image"
                    />
                  </div>
                  <div className="portfolioCard__content px-30 py-30">
                    <span className="portfolioCard__category text-sm uppercase text-beige-dark">
                      LIVING
                    </span>
                    <h3 className="portfolioCard__title text-lg fw-600 mt-8">
                      London Apartments
                    </h3>
                  </div>
                </a>
              </div>
    
              <div className="swiper-slide">
                <a data-barba href="#" className="portfolioCard -type-1 ratio">
                  <div className="portfolioCard__image ratio ratio-3:4">
                    <img
                      className="ratio-img js-lazy"
                      src="#"
                      data-src="img/portfolio/cards/3.jpg"
                      alt="project image"
                    />
                  </div>
                  <div className="portfolioCard__content px-30 py-30">
                    <span className="portfolioCard__category text-sm uppercase text-beige-dark">
                      LIVING
                    </span>
                    <h3 className="portfolioCard__title text-lg fw-600 mt-8">
                      London Apartments
                    </h3>
                  </div>
                </a>
              </div>
    
              <div className="swiper-slide">
                <a data-barba href="#" className="portfolioCard -type-1 ratio">
                  <div className="portfolioCard__image ratio ratio-3:4">
                    <img
                      className="ratio-img js-lazy"
                      src="#"
                      data-src="img/portfolio/cards/4.jpg"
                      alt="project image"
                    />
                  </div>
                  <div className="portfolioCard__content px-30 py-30">
                    <span className="portfolioCard__category text-sm uppercase text-beige-dark">
                      LIVING
                    </span>
                    <h3 className="portfolioCard__title text-lg fw-600 mt-8">
                      London Apartments
                    </h3>
                  </div>
                </a>
              </div>
    
            </div>
    
            <div className="nav -slider lg:d-none">
              <div className="nav__item -left js-prev">
                <i className="icon icon-left-arrow"></i>
              </div>
              <div className="nav__item -right js-next">
                <i className="icon icon-right-arrow"></i>
              </div>
            </div>
    
            <div className="pagination -slider mt-48 js-pagination"></div>
          </div>
        </div>
    
      </div>
    </section>
    


      <section className="layout-pt-md layout-pb-md">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between">
            <div className="text-sm text-grey">Showing 1–9 of 25 results</div>
            <div className="text-sm text-grey">Sort by latest</div>
          </div>
  
          <div className="row y-gap-32 mt-40 lg:mt-20">
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/1.jpg" alt="Product image" />
                  <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a>
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  <div className="shopCard__price text-sm text-dark mt-8">$350.00</div>
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/2.jpg" alt="Product image" />
                  <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a>
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  <div className="shopCard__price text-sm text-dark mt-8">$350.00</div>
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/3.jpg" alt="Product image" />
                  <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a>
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  <div className="shopCard__price text-sm text-dark mt-8">$350.00</div>
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/4.jpg" alt="Product image" />
                  <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a>
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  <div className="shopCard__price text-sm text-dark mt-8">$350.00</div>
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/5.jpg" alt="Product image" />
                  <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a>
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  <div className="shopCard__price text-sm text-dark mt-8">$350.00</div>
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/6.jpg" alt="Product image" />
                  <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a>
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  <div className="shopCard__price text-sm text-dark mt-8">$350.00</div>
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/7.jpg" alt="Product image" />
                  <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a>
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  <div className="shopCard__price text-sm text-dark mt-8">$350.00</div>
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/8.jpg" alt="Product image" />
                  <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a>
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  <div className="shopCard__price text-sm text-dark mt-8">$350.00</div>
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/9.jpg" alt="Product image" />
                  <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a>
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  <div className="shopCard__price text-sm text-dark mt-8">$350.00</div>
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/10.jpg" alt="Product image" />
                  <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a>
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  <div className="shopCard__price text-sm text-dark mt-8">$350.00</div>
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/11.jpg" alt="Product image" />
                  <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a>
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  <div className="shopCard__price text-sm text-dark mt-8">$350.00</div>
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/12.jpg" alt="Product image" />
                  <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a>
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  <div className="shopCard__price text-sm text-dark mt-8">$350.00</div>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  </section>
  

    
<footer className="footer -type-1">

  <div className="footer__top">
    <div className="container">
      <div className="row y-gap-48 justify-content-between">

        {/* Contact */}
        <div className="col-lg-3 col-md-6">
          <div className="footer__item">
            <h3 className="footer__title text-white">Contact</h3>

            <div className="footer__content pr-20">
              <div className="footer__content__item">
                <p><span>T:</span> 9638812342</p>
                <p><span>M:</span> mydecowall14@gmail.com</p>
              </div>

              <div className="footer__content__item">
                <p>
                  <span>A:</span> 8, Navnidhi Avenue, Gurukul, Ahmedabad
                </p>
              </div>

              <div className="footer__content__item">
                <a data-barba href="/contact-us" className="button -simple text-white">
                  GET DIRECTIONS
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div className="col-lg-3 col-md-6">
          <div className="footer__item">
            <h3 className="footer__title text-white">OUR SERVICES</h3>

            <div className="footer__content">
              <div className="footer__content__item">
                <a data-barba href="/services">PVC Wall Panels</a>
              </div>
              <div className="footer__content__item">
                <a data-barba href="/services">PVC Ceilings</a>
              </div>
              <div className="footer__content__item">
                <a data-barba href="/services">PVC Flooring</a>
              </div>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="col-lg-3 col-md-6">
          <div className="footer__item">
            <h3 className="footer__title text-white">USEFUL LINKS</h3>

            <div className="footer__content">
              <div className="footer__content__item"><a data-barba href="/">Home</a></div>
              <div className="footer__content__item"><a data-barba href="/about-us">About Us</a></div>
              <div className="footer__content__item"><a data-barba href="/services">Services</a></div>
              <div className="footer__content__item"><a data-barba href="/contact-us">Contact Us</a></div>
              <div className="footer__content__item"><a data-barba href="#">FAQ</a></div>
              <div className="footer__content__item"><a data-barba href="#">Privacy Policy</a></div>
            </div>
          </div>
        </div>

        {/* Subscribe */}
        <div className="col-lg-3 col-md-6">
          <div className="footer__item">
            <h3 className="footer__title text-white">SUBSCRIBE</h3>

            <div className="footer__content">
              <div className="footer__content__item">
                <p>Get updates on new products, offers and interior trends.</p>
              </div>

              <div className="footer__newsletter">
                <form action="#" method="POST">
                  <input type="email" placeholder="Your Email" />
                  <button type="submit">
                    <i className="icon icon-send"></i>
                  </button>
                </form>
              </div>

              <div className="footer__socials">
                <h3 className="footer__title text-white">FOLLOW US</h3>

                <div className="footer__socials_content">
                  <a data-barba href="#" className="text-white">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a data-barba href="#" className="text-white">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a data-barba href="#" className="text-white">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Bottom */}
  <div className="footer__bottom">
    <div className="container">
      <div className="row align-items-center justify-content-between sm:justify-content-start">

        <div className="col-auto sm:order-2">
          <div className="footer__bottom_text">
            © {new Date().getFullYear()} Decowalls. All rights reserved.
          </div>
        </div>

        <div className="col-auto sm:order-1">
          <div className="footer__logo">
            <img src="img/general/logo.svg" alt="Decowalls logo" />
          </div>
        </div>

        <div className="col-auto sm:d-none">
          <div className="footer__bottom_text">
            Premium Interior Solutions
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Back Button */}
  <div data-cursor className="backButton js-backButton">
    <div className="nav -slider">
      <div className="nav__item -left">
        <i className="icon icon-right-arrow"></i>
      </div>
    </div>
  </div>

</footer>
    
    </div>
    
  </main>
  
</div>    </>
  )
}

export default page