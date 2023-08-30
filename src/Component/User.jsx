import React, { useState } from "react";
import "./User.css";
import { Link } from "react-router-dom";

const User = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    // Gửi yêu cầu GET để kiểm tra thông tin đăng nhập từ API
    fetch("https://data-banraucu-default-rtdb.firebaseio.com/user.json")
      .then(response => response.json())
      .then(data => {
        const users = Object.values(data); // Chuyển đổi thành mảng các người dùng
        const foundUser = users.find(user => user.username === username && user.password === password);
        
        if (foundUser) {
          // Lưu tên đăng nhập vào localStorage
          localStorage.setItem("loggedInUser", username);
          alert("Đăng nhập thành công!");
          window.location.href = '/'
        } else {
          setErrorMessage("Tên đăng nhập hoặc mật khẩu không chính xác.");
        }
      })
      .catch(error => {
        console.error("Lỗi khi kiểm tra đăng nhập:", error);
      });
  };

  return (
    <>
      <div className="container d-flex justify-content-center py-4">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center">
              <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i>
            </h4>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control py-0 px-2"
                  placeholder="Tên đăng nhập"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control py-0 px-2"
                  placeholder="Mật khẩu"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errorMessage && (
                <div className="alert alert-danger">{errorMessage}</div>
              )}
              <button
                type="button"
                className="btn btn-secondary btn-block"
                onClick={handleLogin}
              >
                Đăng Nhập
              </button>
              <div className="message">
                <div>
                  <input type="checkbox" /> Remember ME
                </div>
                <div>
                  <Link to="/dangki">Đăng ký</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
