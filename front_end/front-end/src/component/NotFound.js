import React, { useEffect, useState } from 'react';
import "../notfount.css"
import { Link } from 'react-router-dom';
function NotFount() {
    useEffect(()=>{
        document.title = "Trang lỗi"
    },[])
    return (
        <div className='head'>
            <Link to="/" >
                <header className="top-header">
                </header>
                {/*dust particel*/}
                <div>
                    <div className="starsec" />
                    <div className="starthird" />
                    <div className="starfourth" />
                    <div className="starfifth" />
                </div>
                {/*Dust particle end-*/}
                <div className="lamp__wrap">
                    <div className="lamp">
                        <div className="cable" />
                        <div className="cover" />
                        <div className="in-cover">
                            <div className="bulb" />
                        </div>
                        <div className="light" />
                    </div>
                </div>
                {/* END Lamp */}
            </Link><section className="error"><Link to="/" >
                {/* Content */}
            </Link><div className="error__content"><Link to="/" >
                <div className="error__message message">
                    <h1 className="message__title">Page Not Found</h1>
                   
                    <p className="message__text">Thật sự xin lỗi, không tìm thấy trang theo yêu cầu. Đường dẫn có thể đã bị hỏng hoặc không tổn tại. Xin vui lòng thử lại hoặc liên hệ với chúng tôi.</p>
                </div>
            </Link><div className="error__nav e-nav"><Link to="/" >
            </Link><Link to="/"  className="e-nav__link" ></Link>
                    </div>
                </div>
                {/* END Content */}
            </section>
        </div>
    );
}


export default NotFount