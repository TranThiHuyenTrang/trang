import React from "react";
import "../Css/register.css";
function Register1() {
  return (
      <div className="khung-re ">
          <h1 className="title"> Đăng kí </h1>
          <hr />
          <img className="img-logo " src="logo2.png"/>
          <h5 className="queen"><i>Queen Party</i> </h5>
          <div className="content">
            <p><b>Bạn là ai? </b></p>
            <input type="radio" name="gender" value="vendor" checked /> <b>Người cung cấp dịch vụ</b><br /><br/>
            <input type="radio" name="gender" value="user" /> <b>Người sử dụng dịch vụ </b>
          </div>
          <button className="btn1">Tiếp tục </button>
      </div>
  );
  }
  export default Register1;
