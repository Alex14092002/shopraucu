import React, { useState } from "react";
import "./User.css";
import { Link } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = () => {
    if (!username || !password || !confirmPassword) {
      setErrorMessage("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }
    const userData = {
      username: username,
      password: password,
    };
    fetch("https://data-banraucu-default-rtdb.firebaseio.com/user.json", {
      method: "POST",
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Đăng ký thất bại");
        }
        alert("Đăng ký thành công!");
        window.location.href = '/user'
      })
      .catch((error) => {
        alert(error.message);
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
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control py-0 px-2"
                  placeholder="Nhập lại mật khẩu"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {errorMessage && (
                <div className="alert alert-danger">{errorMessage}</div>
              )}
              <button
                type="button"
                className="btn btn-secondary btn-block"
                onClick={handleSignUp}
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
