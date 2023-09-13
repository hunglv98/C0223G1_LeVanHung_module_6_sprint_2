import "../headerHoa.css"

function Ticket() {
    return (

        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">Contact Form #02</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="wrapper">
                            <div className="row no-gutters">
                                <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                    <div className="contact-wrap w-100 p-md-5 p-4">
                                        <h3 className="mb-4">Get in touch</h3>
                                        <div id="form-message-warning" className="mb-4" />
                                        <div id="form-message-success" className="mb-4">
                                            Your message was sent, thank you!
                                        </div>
                                        <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="name">Full Name</label>
                                                        <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="email">Email Address</label>
                                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="subject">Subject</label>
                                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="#">Message</label>
                                                        <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Message" defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                                                        <div className="submitting" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-5 d-flex align-items-stretch" >
                                    <div className="info-wrap bg-primary w-100 p-md-5 p-4" >
                                        <h3 style={{ "color": "white" }}>Thông tin khách hàng</h3>
                                        {/* <p className="mb-4">We're open for any suggestion or just to have a chat</p> */}
                                        <div className="dbox w-100 d-flex align-items-start">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-map-marker" />
                                            </div>
                                            <div className="text pl-3" >
                                                <p style={{ "color": "white" }}><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-phone" />
                                            </div>
                                            <div className="text pl-3">
                                                <p style={{ "color": "white" }}><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-paper-plane" />
                                            </div>
                                            <div className="text pl-3">
                                                <p style={{ "color": "white" }}><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-globe" />
                                            </div>
                                            <div className="text pl-3">
                                                <p style={{ "color": "white" }}><span>Website</span> <a href="#">yoursite.com</a></p>
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
    );
}

export default Ticket;