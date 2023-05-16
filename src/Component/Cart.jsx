import React, { useState, useEffect } from "react";

import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState( []);

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else {
      setCart([]);
    }
  }, []);

 
  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += parseInt(item.promotionalPrice);
    });
    setTotalPrice(total);
  }, [cart]);

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  });

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart)); // cập nhật localStorage ở đây
  };

  const showCart = () => {
    return (
      <>
        <div className="container">
          <div className="row main-cart">
            {cart.map((value, index) => {
              return (
                <div className="cart-item col-12" key={index}>
                  <div className="img-product-cart">
                    <div className="item-img-product">
                      <div
                        className="icon-cancle"
                        onClick={() => removeItem(index)}
                      >
                        <i className="fa fa-times" aria-hidden="true"></i>
                      </div>
                      <div className="img-product-cart">
                        <img src={value.img1} alt="" width="100px" />
                      </div>
                      <div className="name-item-cart">
                        <h5>{value.name}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="price-cart">
                    <h5>
                      {value.promotionalPrice.replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        "."
                      )}
                      ₫
                    </h5>
                  </div>
                </div>
              );
            })}
            <div className="tongtien">
              <h3>
                Tổng Giá Tiền : <strong>{formatter.format(totalPrice)}</strong>{" "}
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  };
  const shownoCart = () => {
    return (
      <>
        <div className="container giohangrong">
          <h1>Giỏ hàng của bạn đang trống !</h1>
        </div>
      </>
    );
  };

  return <>{cart.length > 0 ? showCart() : shownoCart()}</>;
};

export default Cart;
