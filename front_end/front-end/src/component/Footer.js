import React from 'react';
import "../content.css"
import logo from "../images/logo.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import linkedin from "../images/linkedin.png"
import instagram from "../images/instagram.png"
import youtube from "../images/youtube.png"
import call from "../images/call.png"
import location from "../images/location.png"
import mail from "../images/mail.png"
function Footer() {
    return (
        <div>
        <section className="info_section " style={{"backgroundColor":"#e1e4ed"}} >
                <div className="info_container layout_padding-top">
                  <div className="container">
                    <div className="heading_container">
                      <h2>
                        Liên Hệ Với Chúng Tôi
                      </h2>
                    </div>
                    {/* <div className="info_logo">
                      <img src={logo} alt="" />
                    </div> */}
                    <div className="info_top" style={{"justifyContent":"center"}}>
                      {/* <div className="info_form">
                        <form action>
                          <input type="text" id="email2" placeholder="Enter Your Email" />
                          <button>
                            subscribe
                          </button>
                        </form>
                      </div> */}
                      <div className="social_box" >
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
                          Về chúng tôi
                          </h5>
                          <p>
                            Công Ty TNHH Dịch vụ và Thương mại HLE
                          </p>
                          <p>
                            MST: 0400429984
                          </p>
                          <p>
                            Tầng 10, Tòa Nhà Hành chính, Số 10 Trần Phú, Phường Phước Ninh, Quận Hải Châu, Thành Phố Đà Nẵng
                          </p>
                        </div>
                        <div className="col-md-3 col-lg-2 offset-lg-1">
                          <h5>
                            Hot line:
                          </h5>
                          <ul>
                            <li>
                              <a href="#">
                                +84 2363 845967
                              </a>
                            </li>
                            <li>
                              <a href="#">
                               +84 905 968 579
                              </a>
                            </li>
                            
                          </ul>
                        </div>
                        <div className="col-md-3 ">
                          <div className="info_link-box">
                            <h5>
                              Fanpage:
                            </h5>
                            <ul>
                              
                              <li className>
                                <a className href="about.html"> https://www.fb.com/hleYatch </a>
                              </li>
                              
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-3 col-lg-2 offset-lg-1">
                          <h5>
                            Đặt vé
                          </h5>
                          <ul>
                            <li>
                              <a href="#">
                                Đặt vé ngay tại đây
                              </a>
                            </li>
                            {/* <li>
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
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-9 col-md-10 mx-auto">
                        <div className="info_contact layout_padding2">
                          {/* <div className="row">
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
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              </div>

    )

}
export default Footer