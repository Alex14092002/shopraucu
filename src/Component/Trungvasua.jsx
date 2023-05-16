import React from 'react'
import { Link } from "react-router-dom";
import "./Category.css";
import { useState, useEffect } from "react";
const Uudaihot = (props) => {
      const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://data-banraucu-default-rtdb.firebaseio.com/trungvasua.json")
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
                    src="https://cdn.tgdd.vn/2021/04/content/9-800x450-2.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://nguyenkim.com/images/companies/_1/Content/tin-tuc/nha-bep/vao-bep/cach-lam-3-mon-khoai-khau-cho-be-tu-long-do-trung-va-sua-dac-01.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://salt.tikicdn.com/ts/brickv2og/16/c2/63/ac1d6c42dbc6d670feaf4fbee42f61af.png"
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
        <h1>SẢN PHẨM TRỨNG VÀ SỮA</h1>

        <div className="main-product row">
          {
           

            data.map(item => (

              

               <div className="item-product col-6 col-md-3">
            
                <div className="item-product-main">


                <Link to={`/trungvasua/${item.id}`}>
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
                    <span onClick={ () => props.handleAddToCart( 'trungvasua',  item.id , item.name , item.promotionalPrice , item.img1 )}>+</span>
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
