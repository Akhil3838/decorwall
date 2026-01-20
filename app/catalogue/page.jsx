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
                 Catalogue
                </div>
                <h1 className="page-masthead__title text-white">
                 Catalogue
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
    
    
    {/* <section className="layout-pt-md layout-pb-md bg-dark">
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
    </section> */}
    


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
                  {/* <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a> */}
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  {/* <div className="shopCard__price text-sm text-dark mt-8">$350.00</div> */}
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/2.jpg" alt="Product image" />
                  {/* <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a> */}
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  {/* <div className="shopCard__price text-sm text-dark mt-8">$350.00</div> */}
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/3.jpg" alt="Product image" />
                  {/* <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a> */}
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  {/* <div className="shopCard__price text-sm text-dark mt-8">$350.00</div> */}
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/4.jpg" alt="Product image" />
                  {/* <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a> */}
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  {/* <div className="shopCard__price text-sm text-dark mt-8">$350.00</div> */}
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/5.jpg" alt="Product image" />
                  {/* <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a> */}
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  {/* <div className="shopCard__price text-sm text-dark mt-8">$350.00</div> */}
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/6.jpg" alt="Product image" />
                  {/* <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a> */}
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  {/* <div className="shopCard__price text-sm text-dark mt-8">$350.00</div> */}
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/7.jpg" alt="Product image" />
                  {/* <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a> */}
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  {/* <div className="shopCard__price text-sm text-dark mt-8">$350.00</div> */}
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/8.jpg" alt="Product image" />
                  {/* <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a> */}
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  {/* <div className="shopCard__price text-sm text-dark mt-8">$350.00</div> */}
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/9.jpg" alt="Product image" />
                  {/* <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a> */}
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  {/* <div className="shopCard__price text-sm text-dark mt-8">$350.00</div> */}
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/10.jpg" alt="Product image" />
                  {/* <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a> */}
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  {/* <div className="shopCard__price text-sm text-dark mt-8">$350.00</div> */}
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/11.jpg" alt="Product image" />
                  {/* <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a> */}
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  {/* <div className="shopCard__price text-sm text-dark mt-8">$350.00</div> */}
                </div>
              </div>
            </div>
  
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="shopCard text-center">
                <div className="shopCard__image ratio ratio-29:33">
                  <img className="ratio-img" src="img/shop/products/12.jpg" alt="Product image" />
                  {/* <a data-barba href="#" className="shopCard__button">
                    <i className="icon" data-feather="shopping-bag"></i>
                    Add to cart
                  </a> */}
                </div>
                <div className="shopCard__content mt-20">
                  <div className="shopCard__category text-accent">
                    <a data-barba href="#">House</a>, <a data-barba href="#">Interior</a>
                  </div>
                  <h4 className="shopCard__title text-base mt-8">Grey Velvet Chair</h4>
                  {/* <div className="shopCard__price text-sm text-dark mt-8">$350.00</div> */}
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>

         <div className="swiper-wrapper">
    
              <div className="swiper-slid">
                <a data-barba href="#" className="portfolioCard -type-1 ratio">
                  <div className="portfolioCard__image ratio ratio-1:1">
                    <img
                      className="ratio-img js-lazy"
                      src="#"
                      data-src="img/portfolio/card/1.jpg"
                      alt="project image"
                    />
                  </div>
                  <div className="portfolioCard__content px-30 py-30">
                    {/* <span className="portfolioCard__category text-sm uppercase text-beige-dark">
                      LIVING
                    </span>
                    <h3 className="portfolioCard__title text-lg fw-600 mt-8">
                      London Apartments
                    </h3> */}
                  </div>
                </a>
              </div>
    
    
            </div>

    </div>
  </section>
  

    
<Footer/>
    
    </div>
    
  </main>
  
</div>    </div>
  )
}

export default page