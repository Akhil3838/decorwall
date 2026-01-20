import React from 'react'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer'

function page() {
  return (
    <div className="preloader-visible" data-barba="wrapper">
    {/* preloader start */}
<div className="preloader js-preloader">
  <div className="preloader__bg"></div>

  <div className="preloader__progress">
    <div className="preloader__progress__inner"></div>
    <img
       src="/img/logo1.png"
      alt="Logo"
      style={{ height: "4rem", width: "8rem" }}
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
<Header/>
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
        <img src="img/logo1.png" alt="helix logo" style={{ height: "50px", width: "auto" }}
 />
      </div>
  
      <h4 className="title">Decowalls</h4>
      <p className="subtitle">ARCHITECTURAL DECORATIVE PANELS</p>
    </div>
  
    <div className="sidebar__instagram">
      {/* <h5 className="title">#Decowalls</h5> */}
  
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
    T: +91 96388 12342
    <br />
    M: mydecowall14@gmail.com
  </p>

  <p className="text">
    A: 8, Navnidhi Avenue, Gurukul
    <br />
    Ahmedabad
  </p>

  <button className="button -simple">GET DIRECTIONS</button>
</div>

  
    <div className="sidebar__socials">
      <div className="item">
        <a data-barba href="https://www.facebook.com/mydecowalls?mibextid=ZbWKwL">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
      </div>
      {/* <div className="item">
        <a data-barba href="#">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </div> */}
      <div className="item">
        <a data-barba href="https://www.instagram.com/mydecowall?igsh=MTdveXBpajV0OHlnbQ%3D%3D">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
      {/* <div className="item">
        <a data-barba href="#">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div> */}
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
                  About Us
                </div>
                <h1 className="page-masthead__title text-white">
                  About Us
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
                  About Us
                </a>
              </div>
            </div>
    
          </div>
        </div>
      </div>
    </section>
    
<section className="layout-pt-lg layout-pb-xl md:pb-64">
  <div className="container">
    <div className="row no-gutters align-items-end justify-content-center">

      {/* Left Image */}
      <div className="col-xl-5 col-lg-6">
        <div className="about-me">
          <div
            className="ratio ratio-29:33 bg-image js-lazy"
            data-bg="img/backgrounds/5.jpg"
          ></div>
        </div>
      </div>

      {/* Right Content */}
      <div className="col-xl-5 col-lg-6">
        <div className="ml-minus-col-1 mb-minus-lg md:ml-0 md:mb-0">
          <div className="sectionHeading -left-line bg-beige-dark py-80 px-64 sm:py-48 sm:px-32">

            <span className="sectionHeading__subtitle text-white">
              ABOUT US
            </span>

            <h2 className="sectionHeading__title text-white">
              Decowalls Interiors
            </h2>

            <p className="sectionHeading__text text-white mt-20">
              Established in 2020, Decowalls delivers modern interior solutions with
              premium PVC wall panels, ceilings, flooring and LED mirrors. We serve
              homes, hotels and offices with stylish, durable and affordable products.
            </p>

            <p className="sectionHeading__text text-white mt-12">
              We are authorized stockists of Jeon PVC Panels and Club Tree PVC Panels.
              Our LED mirrors are manufactured using high-quality raw materials to
              ensure strength, durability and long-lasting performance.
            </p>

            <p className="sectionHeading__text text-white mt-12">
              Our products are quality-inspected and available in multiple designs
              and specifications to meet diverse customer needs.
            </p>

            <div className="mt-32">
              <p className="text-white fw-600">Authorized Stockists & Manufacturers</p>
              <p className="text-white mt-8">
                Jeon PVC Panels • Club Tree PVC Panels • LED Mirrors
              </p>
            </div>

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
    
      {/* section start */}
    <section className="layout-pt-md layout-pb-md bg-grey">
      {/* container start */}
      <div className="container">
    
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="sectionHeading -top-line text-center">
              <span className="sectionHeading__subtitle">
                TESTIMONIALS
              </span>
              <h2 className="sectionHeading__title text-black">
                What People Say
              </h2>
            </div>
          </div>
        </div>
    
        <div
          className="sectionSlider overflow-hidden layout-pt-sm js-sectionSlider"
          data-slider-col="base-1 lg-1 md-1 sm-1"
          data-pagination
          data-loop
        >
          <div className="swiper-wrapper">
    
            <div className="swiper-slide">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                  <div className="testimonials text-center">
                    <p className="testimonials__comment fw-400 text-lg sm:text-sm leading-4xl text-dark">
                      “Good quality material of panels available“
                    </p>
    
                    <div className="testimonials__author mt-48">
                      <div className="size-3xl mx-auto mb-20">
                       <div
  className="bg-image rounded-full"
  style={{
    backgroundImage: "url('/img/user.png')",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
></div>

                      </div>
    
                      <span className="text-sm fw-400 uppercase text-beige-dark">
                        Business
                      </span>
                      <h5 className="text-sm fw-400 text-black mt-8">
                        Sunil kumar Yadav
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="swiper-slide">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                  <div className="testimonials text-center">
                    <p className="testimonials__comment fw-400 text-lg sm:text-sm leading-4xl text-dark">
                      “Good collection of PVC panel and quality of PVC panel is also good..“
                    </p>
    
                    <div className="testimonials__author mt-48">
                      <div className="size-3xl mx-auto mb-20">
                        <div
  className="bg-image rounded-full"
  style={{
    backgroundImage: "url('/img/user.png')",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
></div>
                      </div>
    
                      <span className="text-sm fw-400 uppercase text-beige-dark">
                        BUSINESS
                      </span>
                      <h5 className="text-sm fw-400 text-black mt-8">
                       suseela sekaran
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="swiper-slide">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                  <div className="testimonials text-center">
                    <p className="testimonials__comment fw-400 text-lg sm:text-sm leading-4xl text-dark">
                      “Good collection of pvc panels, soffit panels and flutted panels“
                    </p>
    
                    <div className="testimonials__author mt-48">
                      <div className="size-3xl mx-auto mb-20">
                         <div
  className="bg-image rounded-full"
  style={{
    backgroundImage: "url('/img/user.png')",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
></div>
                      </div>
    
                      <span className="text-sm fw-400 uppercase text-beige-dark">
                        BUSINESS MAN
                      </span>
                      <h5 className="text-sm fw-400 text-black mt-8">
                         GHANSYAM JANGIR
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
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
      {/* container end */}
    </section>
    {/* section end */}


    
<Footer/>
    
    </div>
    
  </main>
  
</div>  
  </div>
  )
}

export default page