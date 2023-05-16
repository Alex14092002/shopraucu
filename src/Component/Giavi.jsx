import React from 'react'
import { Link } from "react-router-dom";
import "./Category.css";
import { useState, useEffect } from "react";
const Uudaihot = (props) => {
      const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://data-banraucu-default-rtdb.firebaseio.com/giavi.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  
  }, []);
  return (
  <>
     <div className="container">
        <div className="main-category row">
          <div className="category col-3">
            <h5>
              <i class="fa fa-bars" aria-hidden="true"></i>Danh mục sản phẩm
            </h5>
            <ul>
              <li>
                <Link to='/uudaihot'>
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/menu_icon_1.png?1667276283801"
                    alt=""
                  />{" "}
                  Ưu đãi hot
                </Link>
              </li>
              <li>
                <Link to='/thucphamtuoisong'>
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/menu_icon_2.png?1667276283801"
                    alt=""
                  />
                  Thực phẩm tươi sống
                </Link>
              </li>
              <li>
                <Link to="/trungvasua" >
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/menu_icon_3.png?1667276283801"
                    alt=""
                  />
                  Trứng - sữa
                </Link>
              </li>
           
              <li>
                <Link to="/giavi">
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/menu_icon_5.png?1667276283801"
                    alt=""
                  />
                  Gia vị
                </Link>
              </li>
              <li>
                <Link to="/thucphamkho">
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/menu_icon_4.png?1667276283801"
                    alt=""
                  />
                  Thực phẩm khô
                </Link>
              </li>
              <li>
                <Link to="/thucphamdinhduong">
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/menu_icon_7.png?1667276283801"
                    alt=""
                  />
                  Thực phẩm dinh dưỡng
                </Link>
              </li>
            
             
            </ul>
          </div>
          <div className="slider-banner col-9 col-md-6">
            <div
              id="carouselExampleControlsNoTouching"
              class="carousel slide"
              data-bs-touch="false"
              data-bs-interval="false"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://thucphamquocte.vn/wp-content/uploads/2022/06/2022-08-12-Bi-quyet-nem-nem-gia-vi-600x315.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://lavela.com.vn/upload/images/thai-long/go-muc/lam-cot-dua/mua-mam/mon-ngon3mien/ca-com/suon-rim/muc-xe/gia-vi/1a.png"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://file.hstatic.net/200000395159/article/thuong-hieu-cot-gia-vi-co-dac-quoc-viet-foods_45d6acff7aad442e9bc769d30c316286.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="img-second col-3">
            <div className="item-img-second">
              <img
                src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/right_banner_1.jpg?1667276283801"
                alt=""
                width="100%"
              />
            </div>
            <div className="item-img-second">
              <img
                src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/right_banner_2.jpg?1667276283801"
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container product-andam">
        <h1>SẢN PHẨM GIA VỊ</h1>

        <div className="main-product row">
          {
           

            data.map(item => (

              

               <div className="item-product col-6 col-md-3">
              
                <div className="item-product-main">


                <Link to={`/giavi/${item.id}`}>
                <div className="img-product">
                  <img
                    src={item.img1}
                    alt=""
                    width="100%"
                  />
                </div>
                </Link>


                <div className="name-product">
                  <h5>{item.name}</h5>
                </div>
                <div className="price-cart">
                  <div className="price">
                    <h3>{item.promotionalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}₫</h3>
                  </div>
                  <div className="cart-icon">
                    <span onClick={ () => props.handleAddToCart( 'giavi',  item.id , item.name , item.promotionalPrice , item.img1 )}>+</span>
                  </div>
                </div>
              </div>
                
             
               </div>
              

            ))
          }
        </div>
      </div>

  </>
  )
}

export default Uudaihot
