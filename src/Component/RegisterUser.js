import React from "react";
import "../Css/register2.css";
function RegisterUser() {
  return (
    <div className="khungRegisUser">
      <h1 className="title"> Đăng kí </h1>
      <hr />
      <br />

      <div>
        <div>
          <div>
            <strong className="strong-title">
              Tên của bạn <span className="required">(*)</span>
            </strong>
          </div>
          <div>
            <input
              className="form-input"
              placeholder="Tên của bạn.."
              required
            />
          </div>
        </div>
        <br />
        <div>
          <div>
            <strong className="strong-title">
              Email <span className="required">(*)</span>
            </strong>
          </div>
          <div>
            <input
              className="form-input"
              placeholder="Số điện thoại.."
              required
              type="number"
            />
          </div>
        </div>
        <br />
        <div>
          <div>
            <strong className="strong-title">
              Số điện thoại<span className="required">(*)</span>
            </strong>
          </div>
          <div>
            <input
              className="form-input"
              placeholder="Nhập mật khẩu.."
              required
            />
          </div>
        </div>
        <br />
        <div>
          <div>
            <strong className="strong-title">
              Mật khẩu<span className="required">(*)</span>
            </strong>
          </div>
          <div>
            <input
              className="form-input"
              placeholder="Nhập mật khẩu.."
              required type="password"
            />
          </div>
        </div>
        <br />
        <div>
          <div>
            <strong className="strong-title">
              Xác nhận mật khẩu <span className="required">(*)</span>
            </strong>
          </div>
          <div>
            <input
              className="form-input"
              required
              placeholder="Xác nhận mật khẩu.." type="password"
            />
          </div>
        </div>
        <br />
      </div>
      <button className="btn-RegisterUser">Đăng kí</button>
      <br />
      <p className="title">
        <b>Bạn đã có tài khoản? Đăng nhập ngay</b>{" "}
      </p>
    </div>
  );
}
export default RegisterUser;
