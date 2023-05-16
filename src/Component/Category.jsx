import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'react-toastify/dist/ReactToastify.css';

const Category = (props) => {





  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
    ],
  };
  const settingss = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
    ],
  };


  const [data, setData] = useState([]);



  useEffect(() => {
    fetch("https://data-banraucu-default-rtdb.firebaseio.com/uudaihot.json")
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
                <Link to="/uudaihot">
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/menu_icon_1.png?1667276283801"
                    alt=""
                  />{" "}
                  Ưu đãi hot
                </Link>
              </li>
              <li>
                <Link to="/thucphamtuoisong">
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/menu_icon_2.png?1667276283801"
                    alt=""
                  />
                  Thực phẩm tươi sống
                </Link>
              </li>
              <li>
                <Link to="/trungvasua">
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
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/slider_2.jpg?1667276283801"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/slider_3.jpg?1667276283801"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/slider_1.jpg?1667276283801"
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

      <div className="container main-category">
        <div className="category-noibat">
          <h1>DANH MỤC NỔI BẬT</h1>
        </div>

        <Slider {...settings}>
          <div className="slider-item">
            <Link to="/uudaihot">
              <div className="img-danhmuc-slider">
                <img
                  src="https://bizweb.dktcdn.net/thumb/small/100/459/311/themes/870495/assets/coll_1.jpg?1667276283801"
                  alt=""
                />
              </div>

              <div className="name-danhmuc">
                <h5>Ưu đãi hot</h5>
              </div>
            </Link>
          </div>

          <div className="slider-item">
            <Link to="/thucphamtuoisong">
              <div className="img-danhmuc-slider">
                <img
                  src="https://bizweb.dktcdn.net/thumb/small/100/459/311/themes/870495/assets/coll_2.jpg?1667276283801"
                  alt=""
                />
              </div>

              <div className="name-danhmuc">
                <h5>Thực phẩm tươi sống</h5>
              </div>
            </Link>
          </div>
          <div className="slider-item">
            <Link to="/trungvasua">
              <div className="img-danhmuc-slider">
                <img
                  src="https://bizweb.dktcdn.net/thumb/small/100/459/311/themes/870495/assets/coll_3.jpg?1667276283801"
                  alt=""
                />
              </div>

              <div className="name-danhmuc">
                <h5>Trứng - sữa</h5>
              </div>
            </Link>
          </div>
          <div className="slider-item">
            <Link to="/thucphamkho">
              <div className="img-danhmuc-slider">
                <img
                  src="https://bizweb.dktcdn.net/thumb/small/100/459/311/themes/870495/assets/coll_4.jpg?1667276283801"
                  alt=""
                />
              </div>

              <div className="name-danhmuc">
                <h5>Thực phẩm khô</h5>
              </div>
            </Link>
          </div>
          <div className="slider-item">
            <Link to="/giavi">
              <div className="img-danhmuc-slider">
                <img
                  src="https://bizweb.dktcdn.net/thumb/small/100/459/311/themes/870495/assets/coll_5.jpg?1667276283801"
                  alt=""
                />
              </div>

              <div className="name-danhmuc">
                <h5>Gia vị</h5>
              </div>
            </Link>
          </div>
        
          <div className="slider-item">
            <Link to="/thucphamdinhduong">
              <div className="img-danhmuc-slider">
                <img
                  src="https://bizweb.dktcdn.net/thumb/small/100/459/311/themes/870495/assets/coll_7.jpg?1667276283801"
                  alt=""
                />
              </div>

              <div className="name-danhmuc">
                <h5>Thực phẩm dinh dưỡng</h5>
              </div>
            </Link>
          </div>
     
         
        </Slider>
      </div>
      <div className="container product-andam">
        <h1>SẢN PHẨM ƯU ĐÃI HOT</h1>

        <div className="main-product row">
          {data.map((item) => (
            <div className="item-product col-6 col-md-3">
           
                <div className="item-product-main">
                <Link to={`/uudaihot/${item.id}`}>
                  <div className="img-product">
                    <img src={item.img1} alt="" width="100%" />
                  </div>
                  </Link>
                  <div className="name-product">
                    <h5>{item.name}</h5>
                  </div>
                  <div className="price-cart">
                    <div className="price">
                      <h3>
                        {item.promotionalPrice.replace(
                          /\B(?=(\d{3})+(?!\d))/g,
                          "."
                        )}
                        ₫
                      </h3>
                    </div>
                    <div className="cart-icon">
                      <span onClick={ () => props.handleAddToCart( 'uudaihot',  item.id , item.name , item.promotionalPrice , item.img1 )}>+</span>
                    </div>
                  </div>
                </div>
           
            </div>
          ))}
        </div>
      </div>

        <div className="banner">
          <Link>
            <img
              src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/section_hot_banner.png?1667276283801"
              alt=""
              width="100%"
            />
          </Link>
        </div>

        <div className="thuonghieunoibat container">
          <h1>THƯƠNG HIỆU NỔI BẬT</h1>
          <Slider {...settingss}>
            <div className="slider-item">
              <Link>
                <div className="img-danhmuc-slider">
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/brand_1.jpg?1667276283801"
                    alt=""
                  />
                </div>
              </Link>
            </div>

            <div className="slider-item">
              <Link>
                <div className="img-danhmuc-slider">
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/brand_2.jpg?1667276283801"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className="slider-item">
              <Link>
                <div className="img-danhmuc-slider">
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/brand_4.jpg?1667276283801"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className="slider-item">
              <Link>
                <div className="img-danhmuc-slider">
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/brand_3.jpg?1667276283801"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className="slider-item">
              <Link>
                <div className="img-danhmuc-slider">
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/brand_5.jpg?1667276283801"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className="slider-item">
              <Link>
                <div className="img-danhmuc-slider">
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/brand_6.jpg?1667276283801"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className="slider-item">
              <Link>
                <div className="img-danhmuc-slider">
                  <img
                    src="https://bizweb.dktcdn.net/100/459/311/themes/870495/assets/brand_7.jpg?1667276283801"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </Slider>
        </div>
    </>
  );
};

export default Category;
