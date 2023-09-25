import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";

const Cart = () => {
  const [user, setUser] = useState(localStorage.getItem("loggedInUser"));

  const [cart, setCart] = useState([]);
  const [hoTen, setHoTen] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [diaChi, setDiaChi] = useState("");
  const [ghiChu, setGhiChu] = useState("");

  const handleTrade = () => {
    if (user) {
      // Kiểm tra xem có dữ liệu nào bị bỏ trống không
      if (!hoTen || !soDienThoai || !diaChi) {
        toast.error("Vui lòng điền đầy đủ thông tin", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        // Tạo đối tượng dữ liệu khách hàng
        const customerData = {
          hoTen,
          soDienThoai,
          diaChi,
          ghiChu,
          cart: cart,
        };
        // Gửi dữ liệu lên Firebase Realtime Database
        fetch(
          "https://data-banraucu-default-rtdb.firebaseio.com/custommer.json",
          {
            method: "POST",
            body: JSON.stringify(customerData),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            // Xóa giỏ hàng sau khi đã thanh toán thành công
            setCart([]);
            localStorage.removeItem("cartItems");

            toast.success("Thanh toán thành công", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          })
          .catch((error) => {
            toast.error("Đã xảy ra lỗi trong quá trình thanh toán", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          });
      }
    } else {
      toast.error("Chưa Đăng nhập", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
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
            <div className="container">
              <div className="row">
                <div className="item-input col-12 col-md-6">
                  <label>Họ và tên</label>
                  <input
                    type="text"
                    placeholder="Nhập họ và tên"
                    value={hoTen}
                    onChange={(e) => setHoTen(e.target.value)}
                  />
                </div>
                <div className="item-input col-12 col-md-6">
                  <label>Số điện thoại</label>
                  <input
                    type="text"
                    placeholder="Nhập số điện thoại"
                    value={soDienThoai}
                    onChange={(e) => setSoDienThoai(e.target.value)}
                  />
                </div>
                <div className="item-input col-12 col-md-6">
                  <label>Địa chỉ</label>
                  <input
                    type="text"
                    placeholder="Nhập địa chỉ"
                    value={diaChi}
                    onChange={(e) => setDiaChi(e.target.value)}
                  />
                </div>
                <div className="item-input col-12 col-md-6">
                  <label>Ghi chú</label>
                  <input
                    type="text"
                    placeholder="Ghi chú"
                    value={ghiChu}
                    onChange={(e) => setGhiChu(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="btn-thanhtoan">
              <button onClick={() => handleTrade()}>Thanh toán</button>
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
