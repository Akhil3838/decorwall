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
                  Contact Us
                </div>
                <h1 className="page-masthead__title text-white">
                 Contact Us
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
                  Contact Us
                </a>
              </div>
            </div>
    
          </div>
        </div>
      </div>
    </section>
    
    {/* section end */}

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


    <section className="layout-pt-lg layout-pb-xl md:pb-64">
  <div className="container">
    <div className="row no-gutters">
      {/* Map */}
      <div className="col-xl-7 col-lg-7 z-1">
        <div id="map" className="map ratio ratio-1:1"></div>
      </div>

      {/* Contact Details */}
      <div className="col-xl-4 col-lg-4 offset-lg-1">
        <div className="md:pt-40 md:pb-40">
          <div className="sectionHeading -left-line">
            <span className="sectionHeading__subtitle">
              OUR CONTACT DETAILS
            </span>
            <h2 className="sectionHeading__title">
              Let's Start a Project
            </h2>
          </div>

         <div className="text-sm text-black leading-4xl mt-48 md:mt-16">
  <p>T: 9638812342</p>
  <p>M: mydecowall14@gmail.com</p>
  <br />
  <p>A: 8, Navnidhi Avenue, Gurukul</p>
  <p>Ahmedabad</p>
</div>


          <div className="sectionHeading__button mt-24 md:mt-20">
            <a href="#" className="button -simple text-black">
              GET DIRECTIONS
            </a>
          </div>

          <div className="socialsSection mt-24">
            <a href="#" className="text-accent">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-accent">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-accent">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#" className="text-accent">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="col-xl-7 col-lg-7 offset-lg-5 z-5">
        <div className="mt-minus-xl md:mt-0">
          <div className="sectionHeading -left-line bg-dark py-48 px-48 md:py-20 md:px-20">
            <span className="sectionHeading__subtitle text-white">
              CONTACT FORM
            </span>
            <h2 className="sectionHeading__title text-white">
              Send a Message
            </h2>

            <form
              className="-light row js-ajax-form"
              method="POST"
              action="https://creativelayers.net/themes/hellix-html/contact.php"
              data-message-success="Your message has been sent! We will reply you as soon as possible."
              data-message-error="Something went wrong. Please contact me directly at hellix@example.com."
            >
              <div className="col-12">
                <div className="js-input-group">
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Comment"
                  ></textarea>
                  <span className="form__error"></span>
                </div>
              </div>

              <div className="col-12 mt-20">
                <div className="js-input-group">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                  />
                  <span className="form__error"></span>
                </div>
              </div>

              <div className="col-12 mt-20">
                <div className="js-input-group">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                  />
                  <span className="form__error"></span>
                </div>
              </div>

              <div className="col-12 mt-20">
                <div className="js-input-group">
                  <input
                    type="text"
                    name="website"
                    placeholder="Website"
                  />
                </div>
              </div>

              <div className="col-12 ajax-form-alert js-ajax-form-alert">
                <div className="ajax-form-alert__content"></div>
              </div>

              <div className="col-12 mt-32">
                <button
                  type="submit"
                  name="submit"
                  className="button -md -accent text-white"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>

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