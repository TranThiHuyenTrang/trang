import React from "react";
import "../Css/register2.css";
function RegisterVendor() {
  return (
    <div className="khungRegis">
      <h1 className="title"> Đăng kí </h1>
      <hr /><br />
      <div className="flex-form">
        <div>
            <div>
                <div>
                <strong className="strong-title">
                    Tên nhà hàng <span className="required">(*)</span>
                </strong>
                </div>
                <div>
                <input
                    className="form-input"
                    placeholder="Tên nhà hàng.."
                    required
                />
                </div>
            </div><br />
            <div>
                <div>
                <strong className="strong-title">
                    Số điện thoại <span className="required">(*)</span>
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
            </div><br />
            <div>
                <div>
                <strong className="strong-title">
                    Mật khẩu <span className="required">(*)</span>
                </strong>
                </div>
                <div>
                <input
                    className="form-input"
                    placeholder="Nhập mật khẩu.."
                    required type="password"
                />
                </div>
            </div><br />
            <div>
                <div>
                <strong className="strong-title">
                    Xác nhận mật khẩu <span className="required">(*)</span>
                </strong>
                </div>
                <div>
                <input className="form-input" type="password" required placeholder="Xác nhận mật khẩu.." />
                </div>
            </div><br />
        </div>
        {/*  */}
        <div>
            <div>
                <div>
                <strong className="strong-title">
                    Email <span className="required">(*)</span>
                </strong>
                </div>
                <div>
                <input
                    className="form-input"
                    placeholder="Email của bạn.."
                    required
                />
                </div>
            </div><br />
            <div>
                <div>
                <strong className="strong-title">
                    Ảnh
                </strong>
                </div>
                <div>
                <input
                    className="strong-title"
                    placeholder="Ảnh.."
                    type="file"
                />
                </div>
            </div><br />
            <div>
                <div>
                <strong className="strong-title">
                    Địa chỉ <span className="required">(*)</span>
                </strong>
                </div>
                <div>
                <input
                    className="form-input"
                    placeholder="Địa chỉ của bạn.."
                    required
                />
                </div>
            </div><br />
            <div>
                <div>
                <strong className="strong-title">
                    Thời gian mở cửa
                </strong>
                </div>
                <div>
                <input className="form-input" />
                </div>
            </div><br />
        </div>
      </div>
        <div className="mar">
            <div>
                <strong className="strong-title">
                    Mô tả
                </strong>
            </div>
            <div>
                <textarea className="input-1" />
            </div>
        </div><br />
        <button className="btn-Register">Đăng kí</button><br />
        <p className="title"><b>Bạn đã có tài khoản? Đăng nhập ngay</b> </p>
    </div>
  );
}
export default RegisterVendor;
