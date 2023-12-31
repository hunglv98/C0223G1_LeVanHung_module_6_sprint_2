import React, { useEffect, useState } from 'react';
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
import { getListDate, getListTime, getScheduleByDateAndTime } from '../service/ScheduleService';
import { getSeatSearch } from '../service/SeatService';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"



function Content() {
  // const [dates,setDate] = useState()
  // const getDate = async() =>{
  //   try{
  //     const data = await getListDate();
  //   // setDate(data)
  //   }catch(error){
  //     console.error();
  //   }
  // }
  const navigate = useNavigate()
  const [times, setTime] = useState([])
  const getTime = async () => {
    try {
      const data = await getListTime();
      setTime(data)
    } catch (error) {
      console.error();
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Trang chủ"
    getTime()
  }, [])

  return (
    <div className='content1'>
      <div className="hero_area">
        {/* header section strats */}
        <header className="header_section">
          <div className="container-fluid">
            {/* <nav className="navbar navbar-expand-lg custom_nav-container">
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
                    </nav> */}
          </div>
        </header>
        {/* end header section */}
        {/* slider section */}
        <section className=" slider_section position-relative">
          <div className="detail-box">
            <div className="row">
              <div className="col-md-8 col-lg-6 mx-auto">
                <h1>
                  HLE Yacht<br />
                  An Toàn Là Trên Hết
                </h1>
                <p>
                  Tự hào mang đến chất lượng dịch vụ tốt nhất, an toàn là trên hết, hãy để HLE Yacht mang đến những trải nghiệm khám phá vẻ đẹp huyền bí của sông Hàn.
                </p>
                <div>
                  <a href="#inputDate">
                    Đặt vé
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="img-box">
            {/* <div className="play_btn">
                      <a href="#">
                        <img src={play} alt="" />
                      </a>
                    </div> */}
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
                  Hãy tìm kiếm chuyến đi phù hợp
                </h2>
                <p>
                  cho phép bạn tìm kiếm theo ngày, giờ phù hợp với nhu cầu của bạn
                </p>
              </div>
              <div className='form'>
                <>
                  <Formik
                    initialValues={{
                      inputDate: "",
                      inputTime: "",
                    }}
                    validationSchema={yup.object({
                      inputDate: yup.string().required("Mời nhập vào ngày khởi hành"),
                      inputTime: yup.string().required("Mời nhập vào giờ khởi hành")
                    })}
                    onSubmit={ async(values) => {
             
                      const time = values.inputTime
                      const date = values.inputDate
                      let date1 = new Date(date + " " + time);
                      date1.setHours(date1.getHours() + 1)
            
                      if (date1 > Date.now()) {
                        try {
                          const idschedule = await getScheduleByDateAndTime(date, time)
                          navigate(`/list/${idschedule}`)
                        } catch (error) {
                          Swal.fire({
                            icon: "error",
                            title: "Không tìm thấy lịch chạy này",
                            showConfirmButton: false,
                            timer: 2000
                          })
                        }
                      } else {
                        Swal.fire({
                          icon: "error",
                          timer: 2000,
                          title: "Hãy chọn chuyến có thời gian trước một giờ tàu chạy",
                          showConfirmButton: false
                        })
                      }
                    }}
                  >
                    <Form>
                      <div className="row">
                        <div className='col-lg-2'>
                        </div>
                        <div className="form-group col-lg-4">

                          <label htmlFor='inputDate' style={{ "color": "black" }}>Ngày khởi hành</label>
                          <Field type="date" className="form-control" name="inputDate" id="inputDate"
                            min={new Date().toISOString().split('T')[0]} />
                          <ErrorMessage name='inputDate' component="div" className='error-message' />
                        </div>
                        <div className="form-group col-lg-4">

                          <label htmlFor='inputTime' style={{ "color": "black" }}>Giờ khởi hành</label>
                          <Field as="select" className="form-control" name="inputTime" id="inputTime">
                            <option value="">-Chọn giờ khởi hành-</option>
                            {times.length > 0 && times.map((i, index) => {
                              return (
                                <option key={index} value={i}>{i}</option>
                              )
                            })}
                          </Field>
                          <ErrorMessage name='inputTime' component="div" className='error-message' />
                        </div>

                      </div>

                      <div className="d-flex justify-content-center">
                        <button className="btn btn-primary" style={{ backgroundColor: "#0a8d91", minWidth: "120px", borderRadius: "20px" }} type='submit'>Đặt ngay</button>
                      </div>
                    </Form>
                  </Formik>
                </>
              </div>
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
              Lịch Khởi Hành
            </h2>
            {/* <p>
                      dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    </p> */}
          </div>
        </div>
        <div className="container">
          <div className="package_container">
            <div className="box">
              <div className="detail-box">
                <h4>
                  Lịch tháng 09/2023
                </h4>
                <div className="price_detail">
                  <h5>
                    Ưu đãi sốc giảm đến 50%
                  </h5>
                  <p>
                    Tận hưởng nét đẹp nên thơ của Đà Nẵng vào tiết trời thu
                  </p>
                </div>
                <a href="#">
                  Đặt ngay
                </a>
              </div>
            </div>
            <div className="box ">
              <div className="detail-box">
                <h4>
                  Lịch tháng 08/2023
                </h4>
                <div className="price_detail">
                  <h5>
                    Giá sốc chỉ 399.000
                  </h5>
                  <p>
                    Tận hưởng giọng ca của Sơn Tùng MTP trong ngày 24/08
                  </p>
                </div>
                <a href="#">
                  Đặt ngay
                </a>
              </div>
            </div>
            <div className="box ">
              <div className="detail-box">
                <h4>
                  Lịch tháng 07/2023
                </h4>
                <div className="price_detail">
                  <h5>
                    Ưu đãi giảm 10%
                  </h5>
                  <p>
                    Tận hưởng mùa lễ hội biển cùng Huda Festival
                  </p>
                </div>
                <a href="#">
                  Đặt ngay
                </a>
              </div>
            </div>
            <div className="box ">
              <div className="detail-box">
                <h4>
                  Lịch tháng 06/2023
                </h4>
                <div className="price_detail">
                  <h5>
                    Combo 200.000 VND/ 2 vé
                  </h5>
                  <p>
                    Tận hưởng lễ hội Danang International Firework Festival
                  </p>
                </div>
                <a href="#">
                  Đặt ngay
                </a>
              </div>
            </div>
            <div className="box ">
              <div className="detail-box">
                <h4>
                  Lịch tháng 05/2023
                </h4>
                <div className="price_detail">
                  <h5>
                    Giá vé chỉ từ 49.000 VND
                  </h5>
                  <p>
                    Tận hưởng tuần lễ vàng với ngàn hàng ưu đãi hấp dẫn
                  </p>
                </div>
                <a href="#">
                  Đặt ngay
                </a>
              </div>
            </div>
            <div className="box ">
              <div className="detail-box">
                <h4>
                  Lịch tháng 04/2023
                </h4>
                <div className="price_detail">
                  <h5>
                    Giá vé chỉ từ 1.000 VND
                  </h5>
                  <p>
                    Tận hưởng giá vé ưu đãi nhân dịp lễ 30/04
                  </p>
                </div>
                <a href="#">
                  Đặt ngay
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
            Về chúng tôi
          </h2>
          <p>
            HLE Yacht tự hào là một trong những du thuyền đầu tiên trên sông Hàn đáp ứng được nhu cầu giải trí toàn diện cho quý khách
          </p>
        </div>
        <div className="img-box">
          <img src={about} className="slider-img" alt="" />
        </div>
        <div className="btn-box">
          <a href="#">
            Tìm hiểu thêm
          </a>
        </div>
      </section>
      {/* end about section */}
      {/* client section */}
      <section className="client_section ">
        <div className="container">
          <div className="heading_container">
            <h2>
              Khách hàng nói gì về chúng tôi?
            </h2>
            <p>
              Trải nghiệm của khách hàng là thước đo về sự thành công của chúng tôi
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
                          Du Khách
                        </p>
                      </div>
                    </div>
                    <div className="detail">
                      <p>
                        "Thật sự rất hạnh phúc khi tận hưởng vẻ đẹp của sông Hàn cùng người thân và bạn bè. Ngắm nhìn cầu Rồng phun lửa là một trải nghiệm tuyệt vời"
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
                          Du khách
                        </p>
                      </div>
                    </div>
                    <div className="detail">
                      <p>
                        "Tận hưởng ly Champagne cùng người yêu và ngắm nhìn pháo hoa trên sông Hàn là một kỷ niệm tôi sẽ không bao giờ quên. Cảm ơn những người bạn đã giới thiệu tôi đến với Đà Nẵng"
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

        </div>
      </section>

    </div>
  );
}

export default Content