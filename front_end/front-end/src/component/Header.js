import React from 'react';
import "../content.css"
import logo from "../images/logo.png"
import usericon from "../images/user-icon.png"
import play from "../images/play.png"
import slider from "../images/slider-img.png"
import {Link} from "react-router-dom"

function Header() {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand" href="#">HLE Yatch</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page" >Trang chủ</Link>
        </li>
        <li class="nav-item">
          <Link to="/list" class="nav-link">Đặt vé</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Lịch chạy</a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li class="nav-item">
          <Link to="/login" class="nav-link" aria-current="page" href="#">Đăng nhập</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}
export default Header