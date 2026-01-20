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

        


    <section className="layout-pt-lg layout-pb-xl md:pb-64">
  <div className="container">
    <div className="row no-gutters">
      {/* Map */}
      <div className="col-xl-7 col-lg-7 z-1">
        <div id="map" className="map ratio ratio-1:1"></div>
      </div>

      {/* Contact Details */}
      <div className="col-xl-4 col-lg-4 offset-lg-1">
        <div className="md:pt-40 md:pb-40 ">
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
            <a href="https://www.facebook.com/mydecowalls?mibextid=ZbWKwL" className="text-accent">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            {/* <a href="#" className="text-accent">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a> */}
            <a href="https://www.instagram.com/mydecowall?igsh=MTdveXBpajV0OHlnbQ%3D%3D" className="text-accent">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            {/* <a href="#" className="text-accent">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a> */}
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