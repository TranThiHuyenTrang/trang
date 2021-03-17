import React from "react";
import "../Css/register2.css";
function Login() {
  return (
    <div className="khungLogin">
      <h1 className="title"> Đăng nhập </h1>
      <hr />
      <br />
      <img className="img-logo " src="logo2.png"/>
      <h5 className="queen"><i>Queen Party</i> </h5>
      <div className="contentLogin">
        <div>
          <div>
            <strong className="strong-title">
              Email <span className="required">(*)</span>
            </strong>
          </div>
          <div>
            <input
              className="form-inputLogin"
              placeholder="Nhập email.."
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
              className="form-inputLogin"
              placeholder="Nhập mật khẩu.."
              required type="password"
            />
          </div>
        </div>
        <br />
      </div>
      <button className="btn1">Đăng nhập</button>
    </div>
  );
}
export default Login;
