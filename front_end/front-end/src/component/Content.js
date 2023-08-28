import React from 'react';
import "../content.css"
import logo from "../images/logo.png"
import usericon from "../images/user-icon.png"
import play from "../images/play.png"
import slider from "../images/slider-img.png"
import about from "../images/about-img.png"
import client1 from "../images/client-1.jpg"
import client2 from "../images/client-2.jpg"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import linkedin from "../images/linkedin.png"
import instagram from "../images/instagram.png"
import youtube from "../images/youtube.png"
import call from "../images/call.png"
import location from "../images/location.png"
import mail from "../images/mail.png"



function Content(){
    return(
            <div>
              <div className="hero_area">
                {/* header section strats */}
                <header className="header_section">
                  <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container">
                      <div className="fk_width" id>
                        <div className="custom_menu-btn">
                          <button onclick="openNav()">
                            <span className="s-1"> </span>
                            <span className="s-2"> </span>
                            <span className="s-3"> </span>
                          </button>
                        </div>
                        <div id="myNav" className="overlay">
                          <div className="overlay-content">
                            <a href="index.html">Home</a>
                            <a href="about.html">About</a>
                            <a href="package.html">Packages</a>
                            <a href="testimonial.html">Testimonial</a>
                          </div>
                        </div>
                      </div>
                      <a className="navbar-brand" href="index.html">
                        <img src={logo} alt="" />
                      </a>
                      <div className="user_option">
                        <a href="#">
                          <img src={usericon} alt="" />
                        </a>
                        <form className="form-inline my-2 my-lg-0  mb-3 mb-lg-0">
                          <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit" />
                        </form>
                      </div>
                    </nav>
                  </div>
                </header>
                {/* end header section */}
                {/* slider section */}
                <section className=" slider_section position-relative">
                  <div className="detail-box">
                    <div className="row">
                      <div className="col-md-8 col-lg-6 mx-auto">
                        <h1>
                          Book Now <br />
                          Ship Travel Agency
                        </h1>
                        <p>
                          dummy text of the printing and typesetting industry. Lorem Ipsum has been thedummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        </p>
                        <div>
                          <a href="#">
                            Book now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="img-box">
                    <div className="play_btn">
                      <a href="#">
                        <img src={play} alt="" />
                      </a>
                    </div>
                    <img src={slider} className="slider-img" alt="" />
                  </div>
                </section>
                {/* end slider section */}
              </div>
              {/* book section */}
              <section className="book_section ">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="heading_container">
                        <h2>
                          Book Now Your Ticket
                        </h2>
                        <p>
                          dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        </p>
                      </div>
                      <form>
                        <div className="row">
                          <div className="form-group col-lg-4" style={{"margin":"0px"}}>
                            <label htmlFor="inputAddress1">Where</label>
                            <input type="text" className="form-control" id="inputAddress1" placeholder="1234 Main St" />
                          </div>
                          <div className="form-group col-lg-4">
                            <label htmlFor="inputAddress2">To</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="1234 Main St" />
                          </div>
                          <div className="form-group col-lg-4">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-lg-4">
                            <label htmlFor="inputDate">Date</label>
                            <input type="date" className="form-control" id="inputDate" placeholder="1234 Main St" />
                          </div>
                          <div className="form-group col-lg-4">
                            <label htmlFor="inputPrice">Price</label>
                            <input type="text" className="form-control" id="inputPrice" placeholder="1234 Main St" />
                          </div>
                          <div className="form-group col-lg-4">
                            <label htmlFor="inputPhone">Phone Number</label>
                            <input type="text" className="form-control" id="inputPhone" />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button type="submit" className="btn ">Book Now</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
              {/* end book section */}
              {/* package section */}
              <section className="package_section layout_padding-top">
                <div className="container">
                  <div className="heading_container">
                    <h2>
                      Packages
                    </h2>
                    <p>
                      dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    </p>
                  </div>
                </div>
                <div className="container">
                  <div className="package_container">
                    <div className="box active">
                      <div className="detail-box">
                        <h4>
                          America
                        </h4>
                        <div className="price_detail">
                          <h5>
                            $/1000
                          </h5>
                          <p>
                            It is a long established fact that a reader will be
                          </p>
                        </div>
                        <a href="#">
                          Book Now
                        </a>
                      </div>
                    </div>
                    <div className="box ">
                      <div className="detail-box">
                        <h4>
                          London
                        </h4>
                        <div className="price_detail">
                          <h5>
                            $/1000
                          </h5>
                          <p>
                            It is a long established fact that a reader will be
                          </p>
                        </div>
                        <a href="#">
                          Book Now
                        </a>
                      </div>
                    </div>
                    <div className="box ">
                      <div className="detail-box">
                        <h4>
                          New York
                        </h4>
                        <div className="price_detail">
                          <h5>
                            $/1000
                          </h5>
                          <p>
                            It is a long established fact that a reader will be
                          </p>
                        </div>
                        <a href="#">
                          Book Now
                        </a>
                      </div>
                    </div>
                    <div className="box ">
                      <div className="detail-box">
                        <h4>
                          Hong Kong
                        </h4>
                        <div className="price_detail">
                          <h5>
                            $/1000
                          </h5>
                          <p>
                            It is a long established fact that a reader will be
                          </p>
                        </div>
                        <a href="#">
                          Book Now
                        </a>
                      </div>
                    </div>
                    <div className="box ">
                      <div className="detail-box">
                        <h4>
                          Malaysia
                        </h4>
                        <div className="price_detail">
                          <h5>
                            $/1000
                          </h5>
                          <p>
                            It is a long established fact that a reader will be
                          </p>
                        </div>
                        <a href="#">
                          Book Now
                        </a>
                      </div>
                    </div>
                    <div className="box ">
                      <div className="detail-box">
                        <h4>
                          Japan
                        </h4>
                        <div className="price_detail">
                          <h5>
                            $/1000
                          </h5>
                          <p>
                            It is a long established fact that a reader will be
                          </p>
                        </div>
                        <a href="#">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* end package section */}
              {/* about section */}
              <section className="about_section layout_padding">
                <div className="heading_container">
                  <h2>
                    About Us
                  </h2>
                  <p>
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  </p>
                </div>
                <div className="img-box">
                  <img src={about} className="slider-img" alt="" />
                </div>
                <div className="btn-box">
                  <a href="#">
                    Read More
                  </a>
                </div>
              </section>
              {/* end about section */}
              {/* client section */}
              <section className="client_section ">
                <div className="container">
                  <div className="heading_container">
                    <h2>
                      What Is Says Our Customer
                    </h2>
                    <p>
                      dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    </p>
                  </div>
                </div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="container">
                        <div className="client_container ">
                          <div className="client_box b-1">
                            <div className="client-id">
                              <div className="img-box">
                                <img src={client1} alt="" />
                              </div>
                              <div className="name">
                                <h5>
                                  Alina Jorch
                                </h5>
                                <p>
                                  Tourist
                                </p>
                              </div>
                            </div>
                            <div className="detail">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum
                              </p>
                              <div>
                                <div className="arrow_img">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="client_box b2">
                            <div className="client-id">
                              <div className="img-box">
                                <img src={client2} alt="" />
                              </div>
                              <div className="name">
                                <h5>
                                  Carlosh Den
                                </h5>
                                <p>
                                  Tourist
                                </p>
                              </div>
                            </div>
                            <div className="detail">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum
                              </p>
                              <div>
                                <div className="arrow_img">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="client_container ">
                          <div className="client_box b-1">
                            <div className="client-id">
                              <div className="img-box">
                                <img src={client1} alt="" />
                              </div>
                              <div className="name">
                                <h5>
                                  Alina Jorch
                                </h5>
                                <p>
                                  Tourist
                                </p>
                              </div>
                            </div>
                            <div className="detail">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum
                              </p>
                              <div>
                                <div className="arrow_img">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="client_box b2">
                            <div className="client-id">
                              <div className="img-box">
                                <img src={client2} alt="" />
                              </div>
                              <div className="name">
                                <h5>
                                  Carlosh Den
                                </h5>
                                <p>
                                  Tourist
                                </p>
                              </div>
                            </div>
                            <div className="detail">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum
                              </p>
                              <div>
                                <div className="arrow_img">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="client_container ">
                          <div className="client_box b-1">
                            <div className="client-id">
                              <div className="img-box">
                                <img src={client1} alt="" />
                              </div>
                              <div className="name">
                                <h5>
                                  Alina Jorch
                                </h5>
                                <p>
                                  Tourist
                                </p>
                              </div>
                            </div>
                            <div className="detail">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum
                              </p>
                              <div>
                                <div className="arrow_img">
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="client_box b2">
                            <div className="client-id">
                              <div className="img-box">
                                <img src={client2} alt="" />
                              </div>
                              <div className="name">
                                <h5>
                                  Carlosh Den
                                </h5>
                                <p>
                                  Tourist
                                </p>
                              </div>
                            </div>
                            <div className="detail">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum
                              </p>
                              <div>
                                <div className="arrow_img">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel_btn-container">
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="prev-icon" aria-hidden="true" />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="next-icon" aria-hidden="true" />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </section>
              {/* end client section */}
              {/* info section */}
              <section className="info_section ">
                <div className="info_container layout_padding-top">
                  <div className="container">
                    <div className="heading_container">
                      <h2>
                        Contact Us
                      </h2>
                    </div>
                    <div className="info_logo">
                      <img src={logo} alt="" />
                    </div>
                    <div className="info_top">
                      <div className="info_form">
                        <form action>
                          <input type="text" id="email2" placeholder="Enter Your Email" />
                          <button>
                            subscribe
                          </button>
                        </form>
                      </div>
                      <div className="social_box">
                        <a href="#">
                          <img src={facebook} alt="" />
                        </a>
                        <a href="#">
                          <img src={twitter} alt="" />
                        </a>
                        <a href="#">
                          <img src={linkedin} alt="" />
                        </a>
                        <a href="#">
                          <img src={instagram} alt="" />
                        </a>
                        <a href="#">
                          <img src={youtube} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="info_main">
                      <div className="row">
                        <div className="col-md-3">
                          <h5>
                            About Us
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                          </p>
                        </div>
                        <div className="col-md-3 col-lg-2 offset-lg-1">
                          <h5>
                            Information
                          </h5>
                          <ul>
                            <li>
                              <a href="#">
                                There are many
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                variations of pas
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                sages of Lorem
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Ipsum available,
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                but the majority
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <div className="info_link-box">
                            <h5>
                              Helpful Links
                            </h5>
                            <ul>
                              <li className=" active">
                                <a className href="index.html">Home <span className="sr-only">(current)</span></a>
                              </li>
                              <li className>
                                <a className href="about.html">About </a>
                              </li>
                              <li className>
                                <a className href="package.html">Packages </a>
                              </li>
                              <li className>
                                <a className href="testimonial.html">Testimonial </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-3 col-lg-2 offset-lg-1">
                          <h5>
                            Supported
                          </h5>
                          <ul>
                            <li>
                              <a href="#">
                                There are many
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                variations of pas
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                sages of Lorem
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Ipsum available,
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                but the majority
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-9 col-md-10 mx-auto">
                        <div className="info_contact layout_padding2">
                          <div className="row">
                            <div className="col-md-5">
                              <a href="#" className="link-box">
                                <div className="img-box">
                                  <img src={call} alt="" />
                                </div>
                                <div className="detail-box">
                                  <h6>
                                    Call Now &nbsp; &nbsp; +01 123467890
                                  </h6>
                                </div>
                              </a>
                            </div>
                            <div className="col-md-2">
                              <a href="#" className="link-box">
                                <div className="img-box">
                                  <img src={location} alt="" />
                                </div>
                                <div className="detail-box">
                                  <h6>
                                    Location
                                  </h6>
                                </div>
                              </a>
                            </div>
                            <div className="col-md-5">
                              <a href="#" className="link-box">
                                <div className="img-box">
                                  <img src={mail} alt="" />
                                </div>
                                <div className="detail-box">
                                  <h6>
                                    demo@gmail.com
                                  </h6>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* end info section */}
              {/* footer section */}
              
              {/* footer section */}
            </div>
          );
        }

export default Content