import React from "react";
import "./Footer.css"
import logo from '../img/logo.jpg'
const Footer = () => {
  return (
    <>
    <div className="footer">
    <div className="container">
        <div className="footer-main row">
          <div className="item-footer col-6 col-md-3">
            <h5>Thông tin</h5>
                <div className="img-logo-footer">
                  <img src={logo} alt="" width="50%" />
                </div>
                <ul>
                    <li><i class="fa fa-map-marker" aria-hidden="true"></i> Cơ sở 1: 51 Nguyên Hồng, Láng Hạ, Đống Đa, Hà Nội</li>
                    <li><i class="fa fa-mobile" aria-hidden="true"></i> Hotline : 0793.233.338</li>
                    <li><i class="fa fa-envelope" aria-hidden="true"></i> Email : hica.vn@gmail.com</li>
                    <li><i class="fa fa-map-marker" aria-hidden="true"></i> Cơ sở 2: A2 SO08, Vinhomes Gardenia, Hàm Nghi, Cầu Diễn, Nam Từ Liêm, Hà Nội</li>
                    <li><i class="fa fa-mobile" aria-hidden="true"></i>Hotline: 0798.233.338</li>
                    <li><i class="fa fa-envelope" aria-hidden="true"></i> Email : hica@gmail.com</li>
                </ul>

                <div className="icon">
                  <div className="item-icon-img">
                    <img src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/facebook.png?1667276283801" alt="" />
                  </div>
                  <div className="item-icon-img">
                    <img src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/zalo.png?1667276283801" alt="" />
                  </div>
                  <div className="item-icon-img">
                    <img src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/zalo.png?1667276283801" alt="" />
                  </div>
                  <div className="item-icon-img">
                    <img src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/instagram.png?1667276283801" alt="" />
                  </div>
                  <div className="item-icon-img">
                    <img src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/tiktok.png?1667276283801" alt="" />
                  </div>
                  <div className="item-icon-img">
                    <img src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/shopee_1.png?1667276283801" alt="" />
                  </div>
                </div>
          </div>
          <div className="item-footer col-6 col-md-3">
              <h5>Chính sách</h5>
              <ul>
                <li>Chính sách bảo mật</li>
                <li>Chính sách vận chuyển </li>
                <li>Chính sách đổi trả</li>
                <li>Quy định sử dụng</li>
              </ul>
          </div>
          <div className="item-footer col-6 col-md-3">
              <h5>Hỗ trợ khách hàng</h5>
              <ul>
                <li>Hướng dẫn mua hàng</li>
                <li>Hướng dẫn thanh toán </li>
                <li>Hướng dẫn giao nhận</li>
                <li>Điều khoản dịch vụ</li>
              </ul>
          </div>
          <div className="item-footer col-6 col-md-3">
            <h5>Đăng ký nhận tin</h5>
            <div className="input-dangki">
              <input type="text" />
              <button>Đăng Ký</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Footer;
