import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
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
  <main className="main-content  ">
{/* header start */}
{/* header start */}
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
        T: +1 333 436 1747
        <br />
        M: hi@hellix.com
      </p>
      <p className="text">
        A: PO Box 16122 Collins Street West
        <br />
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
  
  <section className="masthead swiper-container js-slider">
    <div className="swiper-wrapper">
  
      {/* Slide 1 */}
      <div className="swiper-slide">
        <div
          data-parallax="0.6"
          className="masthead__image"
          data-swiper-parallax="40%"
        >
          <img
            data-parallax-target
            className="swiper-lazy"
            src="img/main-sliders/home-1/1.jpg"
            alt="Slider image"
          />
        </div>
  
        <div className="container-fluid h-100 px-32">
          <div className="row align-items-center">
            <div className="col-lg-10 offset-lg-2 offset-md-1">
              <div className="masthead__content js-content">
                <div
                  data-split="lines"
                  data-anim="split-lines"
                  className="js-title-wrap"
                >
                  <h1 className="masthead__title text-white js-title">
                    The House of The<br />
                    <span>Narrative Art</span>
                  </h1>
                </div>
  
                <div className="masthead__button js-button">
                  <a data-barba href="#" className="button -simple text-white">
                    VIEW PROJECT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Slide 2 */}
      <div className="swiper-slide">
        <div
          data-parallax="0.6"
          className="masthead__image"
          data-swiper-parallax="40%"
        >
          <img
            data-parallax-target
            className="swiper-lazy"
            src="img/main-sliders/home-1/2.jpg"
            alt="Slider image"
          />
        </div>
  
        <div className="container-fluid h-100 px-32">
          <div className="row align-items-center">
            <div className="col-lg-10 offset-lg-2 offset-md-1">
              <div className="masthead__content js-content">
                <div data-split="lines" className="js-title-wrap">
                  <h1 className="masthead__title text-white js-title">
                    Catch seafood<br />
                    <span>Restaurant</span>
                  </h1>
                </div>
  
                <div className="masthead__button js-button">
                  <a data-barba href="#" className="button -simple text-white">
                    VIEW PROJECT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Slide 3 */}
      <div className="swiper-slide">
        <div
          data-parallax="0.6"
          className="masthead__image"
          data-swiper-parallax="40%"
        >
          <img
            data-parallax-target
            className="swiper-lazy"
            src="img/main-sliders/home-1/3.jpg"
            alt="Slider image"
          />
        </div>
  
        <div className="container-fluid h-100 px-32">
          <div className="row align-items-center">
            <div className="col-lg-10 offset-lg-2 offset-md-1">
              <div className="masthead__content js-content">
                <div data-split="lines" className="js-title-wrap">
                  <h1 className="masthead__title text-white js-title">
                    Re Future<br />
                    <span>Clinic</span>
                  </h1>
                </div>
  
                <div className="masthead__button js-button">
                  <a data-barba href="#" className="button -simple text-white">
                    VIEW PROJECT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  
    {/* Pagination Numbers */}
    <div className="masthead__pagination_numbers js-pag-numbers lg:d-none">
      <span className="js-current"></span>
      <span>/</span>
      <span className="js-all"></span>
    </div>
  
    {/* Socials */}
    <div className="masthead__socials js-socials md:d-none">
      <div data-anim="slide-up" className="masthead__socials_item">
        <a className="text-white" href="#">.Facebook</a>
        <a className="text-white" href="#">.Instagram</a>
        <a className="text-white" href="#">.Twitter</a>
        <a className="text-white" href="#">.Behance</a>
      </div>
    </div>
  
    {/* Custom Pagination */}
    <div className="masthead-pagination js-pag">
      <div
        data-cursor
        className="masthead-pagination__item is-active js-pag-item"
      >
        <span className="masthead-pagination__number">01</span>
        <h4 className="masthead-pagination__title md:d-none">
          The House of The<br />Narrative Art
        </h4>
        <span className="masthead-pagination__line"></span>
      </div>
  
      <div data-cursor className="masthead-pagination__item js-pag-item">
        <span className="masthead-pagination__number">02</span>
        <h4 className="masthead-pagination__title md:d-none">
          Catch seafood<br />Restaurant
        </h4>
        <span className="masthead-pagination__line"></span>
      </div>
  
      <div data-cursor className="masthead-pagination__item js-pag-item">
        <span className="masthead-pagination__number">03</span>
        <h4 className="masthead-pagination__title md:d-none">
          Re Future<br />Clinic
        </h4>
        <span className="masthead-pagination__line"></span>
      </div>
    </div>
  
    {/* Scroll Indicator */}
    <div className="masthead__scroll js-scroll md:d-none">
      <div className="masthead__scroll_item">
        Scroll
        <div className="masthead__scroll_icon">
          <i className="icon icon-right-arrow"></i>
        </div>
      </div>
    </div>
  </section>


{/* about */}
<section className="layout-pt-lg overflow-visible z-2">
  <div className="container">
    <div data-anim-wrap className="row align-items-center">
      
      {/* Left Content */}
      <div className="col-xl-5 col-lg-6 col-md-10">
        <div className="aboutBack sm:d-none">
          <img src="img/general/large-logo.svg" alt="logo" />
        </div>

        <div
          data-anim-child="slide-right delay-8"
          className="sectionHeading -left-line -about pr-12 lg:pr-0"
        >
          <span className="sectionHeading__subtitle">OUR STORY</span>

          <h2 className="sectionHeading__title">
            Welcome to Decowalls
          </h2>

          <p className="sectionHeading__text">
            Established in 2020, Decowalls brings modern and trendy interior
            solutions for homes, hotels and offices. We specialize in premium
            PVC wall panels, ceilings, flooring and LED mirrors.
          </p>

          <p className="sectionHeading__text mt-12">
            Our products are durable, stylish and affordable. We are authorized
            stockists of Jeon PVC Panels and Club Tree PVC Panels, ensuring
            superior quality and customer satisfaction.
          </p>

          <div className="sectionHeading__button">
            <a
              data-barba
              href="#"
              className="button -md -dark text-white"
            >
              DISCOVER MORE
            </a>
          </div>
        </div>
      </div>

      {/* Right Images */}
      <div className="col-xl-7 col-lg-6">
        <div className="overlayImgs md:mt-60">
          
          <div
            data-anim-child="img-right cover-black"
            className="overlayImgs__back"
          >
            <img src="img/backgrounds/7.jpg" alt="Image" />
          </div>

          <div
            data-anim-child="img-right cover-black delay-3"
            className="overlayImgs__front -border"
          >
            <img src="img/backgrounds/2.jpg" alt="Image" />
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


  {/* counter */}
  <section className="layout-pt-md layout-pb-md bg-grey pattern_bg_1">
    <div className="container">
      <div className="row justify-content-between md:pt-48">
  
        {/* Counter 1 */}
        <div className="col-lg-auto col-md-6">
          <div className="counter">
            <div className="counter__back">532</div>
  
            <div className="counter__content">
              <div className="counter__number text-black">532</div>
              <h5 className="counter__title text-black">
                happy<br />Clients
              </h5>
            </div>
          </div>
        </div>
  
        {/* Counter 2 */}
        <div className="col-lg-auto col-md-6">
          <div className="counter">
            <div className="counter__back">48</div>
  
            <div className="counter__content">
              <div className="counter__number text-black">48</div>
              <h5 className="counter__title text-black">
                Years of<br />Experience
              </h5>
            </div>
          </div>
        </div>
  
        {/* Counter 3 */}
        <div className="col-lg-auto col-md-6">
          <div className="counter">
            <div className="counter__back">76</div>
  
            <div className="counter__content">
              <div className="counter__number text-black">76</div>
              <h5 className="counter__title text-black">
                Awards<br />Winning
              </h5>
            </div>
          </div>
        </div>
  
        {/* Counter 4 */}
        <div className="col-lg-auto col-md-6">
          <div className="counter">
            <div className="counter__back">19</div>
  
            <div className="counter__content">
              <div className="counter__number text-black">19</div>
              <h5 className="counter__title text-black">
                Office<br />Worldwide
              </h5>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </section>


  {/* services */}
{/* services */}
<section className="layout-pt-lg layout-pb-lg">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="sectionHeading -top-line text-center">
          <span className="sectionHeading__subtitle">WHAT CAN WE OFFER</span>
          <h2 className="sectionHeading__title">Our Services</h2>
        </div>
      </div>
    </div>

    <div className="row y-gap-32 layout-pt-sm">
      {/* PVC Wall Paneling */}
      <div className="col-lg-4 col-md-6">
        <div data-anim="slide-up" className="service -card -hover">
          <div className="service__content -border">
            <div className="service__icon">
              <i className="icon icon-cube text-beige"></i>
            </div>

            <h3 className="service__title mt-20">PVC Wall Paneling</h3>
            <p className="service__text">
              Stylish, durable and maintenance-free wall panels. Easy to install,
              hygienic and a perfect alternative to paint or tiles.
            </p>

            <div className="service__button">
              <a href="#" className="button -simple text-black">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PVC Ceiling */}
      <div className="col-lg-4 col-md-6">
        <div data-anim="slide-up" className="service -card -hover">
          <div className="service__content -border">
            <div className="service__icon">
              <i className="icon icon-home text-beige"></i>
            </div>

            <h3 className="service__title mt-20">PVC Ceiling</h3>
            <p className="service__text">
              Lightweight, moisture-resistant ceiling panels. Brightens interiors
              and supports lights, fans and air vents easily.
            </p>

            <div className="service__button">
              <a href="#" className="button -simple text-black">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PVC Flooring */}
      <div className="col-lg-4 col-md-6">
        <div data-anim="slide-up" className="service -card -hover">
          <div className="service__content -border">
            <div className="service__icon">
              <i className="icon icon-layers text-beige"></i>
            </div>

            <h3 className="service__title mt-20">PVC Flooring</h3>
            <p className="service__text">
              Waterproof vinyl flooring with a real-wood look. Comfortable,
              noise-reducing and ideal for high-traffic areas.
            </p>

            <div className="service__button">
              <a href="#" className="button -simple text-black">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  {/* portfolio */}
  <section className="layout-pb-lg">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-auto">
          <div className="sectionHeading -left-line">
            <span className="sectionHeading__subtitle">PROJECTS</span>
            <h2 className="sectionHeading__title">Featured Works</h2>
          </div>
        </div>
      </div>
  
      <div className="row justify-content-center layout-pt-sm">
        <div className="col-lg-8">
          <div
            className="sectionSlider js-sectionSlider"
            data-gap="30"
            data-slider-col="base-1 lg-1 md-1 sm-1"
            data-center
            data-loop
            data-pagination
            data-cursor
            data-cursor-label="DRAG"
          >
            <div className="sliderNav -portfolio-slider js-nav">
              <button className="sliderNav__item -prev js-prev">PREV</button>
              <button className="sliderNav__item -next js-next">NEXT</button>
            </div>
  
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <a
                  data-barba
                  data-cursor
                  data-cursor-label="DRAG"
                  href="#"
                  className="portfolio"
                >
                  <div className="portfolio__image">
                    <div className="ratio ratio-16:9">
                      <img
                        className="ratio-img swiper-lazy"
                        src="#"
                        data-src="img/portfolio/wide/1.jpg"
                        alt="project image"
                      />
                      <div className="swiper-lazy-preloader"></div>
                    </div>
                  </div>
  
                  <div className="portfolio__content text-center">
                    <span className="portfolio__category">BUILDINGS</span>
                    <h3 className="portfolio__title">Pensacola Cityblock</h3>
                  </div>
                </a>
              </div>
  
              <div className="swiper-slide">
                <a
                  data-barba
                  data-cursor
                  data-cursor-label="DRAG"
                  href="#"
                  className="portfolio"
                >
                  <div className="portfolio__image">
                    <div className="ratio ratio-16:9">
                      <img
                        className="ratio-img swiper-lazy"
                        src="#"
                        data-src="img/portfolio/wide/2.jpg"
                        alt="project image"
                      />
                      <div className="swiper-lazy-preloader"></div>
                    </div>
                  </div>
  
                  <div className="portfolio__content text-center">
                    <span className="portfolio__category">BUILDINGS</span>
                    <h3 className="portfolio__title">Pensacola Cityblock</h3>
                  </div>
                </a>
              </div>
  
              <div className="swiper-slide">
                <a
                  data-barba
                  data-cursor
                  data-cursor-label="DRAG"
                  href="#"
                  className="portfolio"
                >
                  <div className="portfolio__image">
                    <div className="ratio ratio-16:9">
                      <img
                        className="ratio-img swiper-lazy"
                        src="#"
                        data-src="img/portfolio/wide/3.jpg"
                        alt="project image"
                      />
                      <div className="swiper-lazy-preloader"></div>
                    </div>
                  </div>
  
                  <div className="portfolio__content text-center">
                    <span className="portfolio__category">BUILDINGS</span>
                    <h3 className="portfolio__title">Pensacola Cityblock</h3>
                  </div>
                </a>
              </div>
            </div>
  
            <div className="pagination -slider mt-48 js-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* cta */}
  <section className="layout-pt-md layout-pb-md bg-beige-dark">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-xl-7 col-lg-8 col-md-10">
          <div className="cta">
            <h2 className="cta__title text-white">
              Get Incredible Interior Design Right Now!
            </h2>
  
            <p className="cta__text px-80 lg:px-0 text-white">
              Lorem ipsum dolor sit amet messa. consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor.
            </p>
  
            <div className="cta__button">
              <a data-barba href="#" className="button -md -white">
                Start my project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* circle counter */}
  <section className="layout-pt-lg layout-pb-lg bg-dark-img pattern_bg_2">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto">
          <div className="sectionHeading -top-line text-center">
            <span className="sectionHeading__subtitle">OUR SKILLS</span>
            <h2 className="sectionHeading__title text-white">
              The Core Company Values
            </h2>
          </div>
        </div>
      </div>
  
      <div className="row justify-content-center justify-content-md-between y-gap-48 layout-pt-sm">
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-5">
          <div
            className="pieChart text-center"
            data-percent="95"
            data-anim="pie-chart"
          >
            <div className="pieChart__chart">
              <svg viewBox="0 0 75 75">
                <circle
                  cx="50%"
                  cy="50%"
                  r="35"
                  className="pieChart__back"
                ></circle>
                <circle
                  cx="50%"
                  cy="50%"
                  r="35"
                  className="pieChart__bar bar-stroke-hidden js-chart-bar"
                ></circle>
              </svg>
              <div className="pieChart__percent text-white js-chart-percent">
                0%
              </div>
            </div>
  
            <div className="pieChart__content">
              <h4 className="pieChart__title text-white">Illustration</h4>
              <p className="pieChart__text text-white">
                Lorem ipsum dolor amet sociis dolor.
              </p>
            </div>
          </div>
        </div>
  
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-5">
          <div
            className="pieChart text-center"
            data-percent="50"
            data-anim="pie-chart"
          >
            <div className="pieChart__chart">
              <svg viewBox="0 0 75 75">
                <circle
                  cx="50%"
                  cy="50%"
                  r="35"
                  className="pieChart__back"
                ></circle>
                <circle
                  cx="50%"
                  cy="50%"
                  r="35"
                  className="pieChart__bar bar-stroke-hidden js-chart-bar"
                ></circle>
              </svg>
              <div className="pieChart__percent text-white js-chart-percent">
                0%
              </div>
            </div>
  
            <div className="pieChart__content">
              <h4 className="pieChart__title text-white">Interior Design</h4>
              <p className="pieChart__text text-white">
                Lorem ipsum dolor amet sociis dolor.
              </p>
            </div>
          </div>
        </div>
  
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-5">
          <div
            className="pieChart text-center"
            data-percent="100"
            data-anim="pie-chart"
          >
            <div className="pieChart__chart">
              <svg viewBox="0 0 75 75">
                <circle
                  cx="50%"
                  cy="50%"
                  r="35"
                  className="pieChart__back"
                ></circle>
                <circle
                  cx="50%"
                  cy="50%"
                  r="35"
                  className="pieChart__bar bar-stroke-hidden js-chart-bar"
                ></circle>
              </svg>
              <div className="pieChart__percent text-white js-chart-percent">
                0%
              </div>
            </div>
  
            <div className="pieChart__content">
              <h4 className="pieChart__title text-white">Architecture</h4>
              <p className="pieChart__text text-white">
                Lorem ipsum dolor amet sociis dolor.
              </p>
            </div>
          </div>
        </div>
  
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-5">
          <div
            className="pieChart text-center"
            data-percent="75"
            data-anim="pie-chart"
          >
            <div className="pieChart__chart">
              <svg viewBox="0 0 75 75">
                <circle
                  cx="50%"
                  cy="50%"
                  r="35"
                  className="pieChart__back"
                ></circle>
                <circle
                  cx="50%"
                  cy="50%"
                  r="35"
                  className="pieChart__bar bar-stroke-hidden js-chart-bar"
                ></circle>
              </svg>
              <div className="pieChart__percent text-white js-chart-percent">
                0%
              </div>
            </div>
  
            <div className="pieChart__content">
              <h4 className="pieChart__title text-white">3D Modeling</h4>
              <p className="pieChart__text text-white">
                Lorem ipsum dolor amet sociis dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  {/* team */}
  <section className="layout-pt-lg layout-pb-lg">
    <div className="container">
      <div className="row justify-content-center md:justify-content-start">
        <div className="col-auto">
          <div className="sectionHeading -top-line -md text-center md:text-left">
            <span className="sectionHeading__subtitle">PROFESSIONALS</span>
            <h2 className="sectionHeading__title">Our Team</h2>
          </div>
        </div>
      </div>
  
      <div className="row layout-pt-sm">
        <div
          className="sectionSlider overflow-hidden sm:px-16 js-sectionSlider"
          data-gap="30"
          data-slider-col="base-4 lg-3 md-2 sm-2"
          data-pagination
        >
          <div className="swiper-wrapper">
  
            {/* Slide 1 */}
            <div className="swiper-slide">
              <div className="team -hover">
                <div data-anim="img-right cover-black" className="team__image">
                  <div>
                    <div
                      className="ratio ratio-3:4 bg-image js-lazy"
                      data-bg="img/team/1.png"
                    ></div>
                  </div>
                </div>
  
                <div className="team__content">
                  <div className="team__socials">
                    <a data-barba href="#" className="text-white"><i className="fa fa-facebook"></i></a>
                    <a data-barba href="#" className="text-white"><i className="fa fa-twitter"></i></a>
                    <a data-barba href="#" className="text-white"><i className="fa fa-instagram"></i></a>
                    <a data-barba href="#" className="text-white"><i className="fa fa-linkedin"></i></a>
                  </div>
  
                  <div className="md:d-none">
                    <div className="team__info">INTERIOR DESIGNER</div>
                    <h3 className="team__title text-white">Jenny Wilson</h3>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Slide 2 */}
            <div className="swiper-slide">
              <div className="team -hover">
                <div data-anim="img-right cover-black" className="team__image">
                  <div>
                    <div className="ratio ratio-3:4 bg-image js-lazy" data-bg="img/team/2.png"></div>
                  </div>
                </div>
  
                <div className="team__content">
                  <div className="team__socials">
                    <a data-barba href="#" className="text-white"><i className="fa fa-facebook"></i></a>
                    <a data-barba href="#" className="text-white"><i className="fa fa-twitter"></i></a>
                    <a data-barba href="#" className="text-white"><i className="fa fa-instagram"></i></a>
                    <a data-barba href="#" className="text-white"><i className="fa fa-linkedin"></i></a>
                  </div>
  
                  <div className="md:d-none">
                    <div className="team__info">INTERIOR DESIGNER</div>
                    <h3 className="team__title text-white">Jenny Wilson</h3>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Slide 3 */}
            <div className="swiper-slide">
              <div className="team -hover">
                <div data-anim="img-right cover-black" className="team__image">
                  <div>
                    <div className="ratio ratio-3:4 bg-image js-lazy" data-bg="img/team/3.png"></div>
                  </div>
                </div>
  
                <div className="team__content">
                  <div className="team__socials">
                    <a data-barba href="#" className="text-white"><i className="fa fa-facebook"></i></a>
                    <a data-barba href="#" className="text-white"><i className="fa fa-twitter"></i></a>
                    <a data-barba href="#" className="text-white"><i className="fa fa-instagram"></i></a>
                    <a data-barba href="#" className="text-white"><i className="fa fa-linkedin"></i></a>
                  </div>
  
                  <div className="md:d-none">
                    <div className="team__info">INTERIOR DESIGNER</div>
                    <h3 className="team__title text-white">Jenny Wilson</h3>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Slide 4 */}
            <div className="swiper-slide">
              <div className="team -hover">
                <div data-anim="img-right cover-black" className="team__image">
                  <div>
                    <div className="ratio ratio-3:4 bg-image js-lazy" data-bg="img/team/4.png"></div>
                  </div>
                </div>
  
                <div className="team__content">
                  <div className="team__socials">
                    <a data-barba href="#" className="text-white"><i className="fa fa-facebook"></i></a>
                    <a data-barba href="#" className="text-white"><i className="fa fa-twitter"></i></a>
                    <a data-barba href="#" className="text-white"><i className="fa fa-instagram"></i></a>
                    <a data-barba href="#" className="text-white"><i className="fa fa-linkedin"></i></a>
                  </div>
  
                  <div className="md:d-none">
                    <div className="team__info">INTERIOR DESIGNER</div>
                    <h3 className="team__title text-white">Jenny Wilson</h3>
                  </div>
                </div>
              </div>
            </div>
  
          </div>
  
          {/* Slider Navigation */}
          <div className="nav -slider lg:d-none">
            <div className="nav__item -left js-prev">
              <i className="icon icon-left-arrow"></i>
            </div>
            <div className="nav__item -right js-next">
              <i className="icon icon-right-arrow"></i>
            </div>
          </div>
  
          {/* Pagination */}
          <div className="pagination -slider mt-48 js-pagination"></div>
        </div>
      </div>
    </div>
  </section>
  {/* blog */}
  <section className="layout-pt-lg layout-pb-lg bg-beige-light">
    <div className="container">
      <div className="row">
        <div className="col-auto">
          <div className="sectionHeading -left-line">
            <span className="sectionHeading__subtitle">BLOG</span>
            <h2 className="sectionHeading__title">Latest News</h2>
          </div>
        </div>
      </div>
  
      <div className="row y-gap-32 layout-pt-sm">
  
        {/* Blog 1 */}
        <div className="col-lg-4 col-md-6">
          <div data-anim-wrap className="blog -hover">
            <a data-barba href="#">
              <div className="blog__image">
                <div data-anim-child="img-right cover-black">
                  <div>
                    <div className="ratio ratio-41:35">
                      <img
                        className="ratio-img"
                        src="img/blog/1.jpg"
                        alt="blog image"
                      />
                    </div>
                  </div>
                </div>
                <div className="blog__category">Interior</div>
              </div>
            </a>
  
            <div className="blog__content mt-20">
              <div
                data-anim-child="slide-up delay-6"
                className="blog__info"
              >
                <a data-barba href="#">APRIL 06, 2021</a>
                <a data-barba href="#">Floyd Miles</a>
              </div>
  
              <div data-anim-child="slide-up delay-7">
                <a data-barba href="#">
                  <h3 className="blog__title text-black pr-80 lg:pr-0">
                    Nordic style, interior style for simple life
                  </h3>
                </a>
              </div>
  
              <div data-anim-child="slide-up delay-8">
                <a
                  data-barba
                  href="#"
                  className="blog__button button -simple text-black"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
  
        {/* Blog 2 */}
        <div className="col-lg-4 col-md-6">
          <div data-anim-wrap className="blog -hover">
            <a data-barba href="#">
              <div className="blog__image">
                <div data-anim-child="img-right cover-black">
                  <div>
                    <div className="ratio ratio-41:35">
                      <img
                        className="ratio-img"
                        src="img/blog/2.jpg"
                        alt="blog image"
                      />
                    </div>
                  </div>
                </div>
                <div className="blog__category">Interior</div>
              </div>
            </a>
  
            <div className="blog__content mt-20">
              <div
                data-anim-child="slide-up delay-6"
                className="blog__info"
              >
                <a data-barba href="#">APRIL 06, 2021</a>
                <a data-barba href="#">Floyd Miles</a>
              </div>
  
              <div data-anim-child="slide-up delay-7">
                <a data-barba href="#">
                  <h3 className="blog__title text-black pr-80 lg:pr-0">
                    Nordic style, interior style for simple life
                  </h3>
                </a>
              </div>
  
              <div data-anim-child="slide-up delay-8">
                <a
                  data-barba
                  href="#"
                  className="blog__button button -simple text-black"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
  
        {/* Blog 3 */}
        <div className="col-lg-4 col-md-6">
          <div data-anim-wrap className="blog -hover">
            <a data-barba href="#">
              <div className="blog__image">
                <div data-anim-child="img-right cover-black">
                  <div>
                    <div className="ratio ratio-41:35">
                      <img
                        className="ratio-img"
                        src="img/blog/3.jpg"
                        alt="blog image"
                      />
                    </div>
                  </div>
                </div>
                <div className="blog__category">Interior</div>
              </div>
            </a>
  
            <div className="blog__content mt-20">
              <div
                data-anim-child="slide-up delay-6"
                className="blog__info"
              >
                <a data-barba href="#">APRIL 06, 2021</a>
                <a data-barba href="#">Floyd Miles</a>
              </div>
  
              <div data-anim-child="slide-up delay-7">
                <a data-barba href="#">
                  <h3 className="blog__title text-black pr-80 lg:pr-0">
                    Nordic style, interior style for simple life
                  </h3>
                </a>
              </div>
  
              <div data-anim-child="slide-up delay-8">
                <a
                  data-barba
                  href="#"
                  className="blog__button button -simple text-black"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </section>
  {/* clients */}
  <section className="layout-pt-md layout-pb-md">
    <div className="container">
      <div className="row y-gap-32 justify-content-between align-items-center">
  
        <div className="col-lg-auto col-md-auto col-6">
          <div className="clients">
            <div className="clients__image">
              <img src="img/clients/1.png" alt="clients image" />
            </div>
          </div>
        </div>
  
        <div className="col-lg-auto col-md-auto col-6">
          <div className="clients">
            <div className="clients__image">
              <img src="img/clients/2.png" alt="clients image" />
            </div>
          </div>
        </div>
  
        <div className="col-lg-auto col-md-auto col-6">
          <div className="clients">
            <div className="clients__image">
              <img src="img/clients/3.png" alt="clients image" />
            </div>
          </div>
        </div>
  
        <div className="col-lg-auto col-md-auto col-6">
          <div className="clients">
            <div className="clients__image">
              <img src="img/clients/4.png" alt="clients image" />
            </div>
          </div>
        </div>
  
        <div className="col-lg-auto col-md-auto col-6">
          <div className="clients">
            <div className="clients__image">
              <img src="img/clients/5.png" alt="clients image" />
            </div>
          </div>
        </div>
  
        <div className="col-lg-auto col-md-auto col-6">
          <div className="clients">
            <div className="clients__image">
              <img src="img/clients/6.png" alt="clients image" />
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </section>
  {/* footer */}
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
</div>

    </>
  );
}
