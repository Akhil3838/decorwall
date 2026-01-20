import React from 'react'

function Footer() {
  return (
    <>
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
                  <a data-barba href="https://www.facebook.com/mydecowalls?mibextid=ZbWKwL" className="text-white">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a data-barba href="https://www.instagram.com/mydecowall?igsh=MTdveXBpajV0OHlnbQ%3D%3D" className="text-white">
                    <i className="fa fa-instagram"></i>
                  </a>
                  {/* <a data-barba href="#" className="text-white">
                    <i className="fa fa-linkedin"></i>
                  </a> */}
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
            <img
      src="/img/logo1.png"
      alt="Logo"
      className="header__logo-img"
      style={{ height: "50px", width: "auto" }}
    />
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


    </>
  )
}

export default Footer