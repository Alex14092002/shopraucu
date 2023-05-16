import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
const toggleBar = () =>{ 
  const barMobile = document.querySelector('.mobile-bar')
  barMobile.classList.toggle('special-bar')

}




const Header = () => {
  return (
    <>
      <div className="mobile-bar ">
        <div className="icon-cancle-barMobile" onClick={()=>toggleBar()}>
        <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        <ul>
          <li>
            <Link to='/'>
            <img src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/logo.png?1667276283801" alt=""  width='70%'/>
            </Link>
          </li>
          <li>
            <Link to='/'>Trang Chủ</Link>
          </li>
          <li>
            {" "}
            <Link to="/hethongcuahang">
              {" "}
              <img
                src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/policy_header_image_2.png?1667276283801"
                alt=""
                width="20px"
              />{" "}
              Hệ Thống Cửa Hàng
            </Link>
          </li>
          <li>
            <Link to="/chinhsach">
              {" "}
              <img
                src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/policy_header_image_1.png?1667276283801"
                alt=""
                width="20px"
              />{" "}
              Chính Sách Đổi Trả
            </Link>
          </li>
          <li>
            <Link to='/uudaihot'>
            <img src="https://bizweb.dktcdn.net/thumb/small/100/459/311/themes/870495/assets/coll_1.jpg?1667276283801" alt="" width='20px' />
            Ưu đãi hot
            </Link>
          </li>
          <li>
            <Link to='/thucphamtuoisong'>
            <img src="https://bizweb.dktcdn.net/thumb/small/100/459/311/themes/870495/assets/coll_2.jpg?1667276283801" alt="" width='20px' />
            Thực phẩm tươi sống
            </Link>
          </li>
          <li>
            <Link to='/trungvasua'>
            <img src="https://bizweb.dktcdn.net/thumb/small/100/459/311/themes/870495/assets/coll_3.jpg?1667276283801" alt="" width='20px' />
            Trứng và sữa
            </Link>
          </li>
          <li>
            <Link to='/thucphamkho'>
            <img src="https://bizweb.dktcdn.net/thumb/small/100/459/311/themes/870495/assets/coll_4.jpg?1667276283801" alt="" width='20px' />
            Thực phẩm khô
            </Link>
          </li>
          <li>
            <Link to='/giavi'>
            <img src="https://bizweb.dktcdn.net/thumb/small/100/459/311/themes/870495/assets/coll_5.jpg?1667276283801" alt="" width='20px' />
            Gia vị
            </Link>
          </li>
          <li>
            <Link to='/thucphamdinhduong'>
            <img src="https://bizweb.dktcdn.net/thumb/small/100/459/311/themes/870495/assets/coll_7.jpg?1667276283801" alt="" width='20px' />
            Thực phẩm dinh dưỡng
            </Link>
          </li>
        </ul>
      </div>

      <div className="header-top">
        <img
          src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/top_banner_mb.jpg?1667276283801"
          alt=""
          height="100%"
          width="100%"
        />
      </div>

      <div className="header sticky-top">
        <nav>
          <div class="navbar">
            <i onClick={() => toggleBar()} class="fa fa-bars" id="humuber" aria-hidden="true"></i>
            <div class="logo">
              <Link to="/">
                <img
                  src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/logo.png?1667276283801"
                  alt=""
                  width="100px"
                />
              </Link>
            </div>
            <div class="nav-links">
              <div class="sidebar-logo">
                <span class="logo-name">
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/logo.png?1667276283801"
                    alt=""
                    width="100px"
                  />
                </span>

                <i class="fa fa-times" aria-hidden="true" id="humuber"></i>
              </div>
              <ul class="links">
                <li>
                  <Link to="./">Trang Chủ</Link>
                </li>
                <li>
                  <Link to="/hethongcuahang">
                    {" "}
                    <img
                      src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/policy_header_image_2.png?1667276283801"
                      alt=""
                    />{" "}
                    Hệ Thống Cửa Hàng
                  </Link>
                </li>
                <li>
                  <Link to="/chinhsach">
                    {" "}
                    <img
                      src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/policy_header_image_1.png?1667276283801"
                      alt=""
                    />{" "}
                    Chính Sách Đổi Trả
                  </Link>
                </li>
              </ul>
            </div>
            <div class="booking">
              <Link to="/cart">
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
