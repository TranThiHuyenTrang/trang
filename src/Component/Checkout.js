import React from "react";
import "../Css/checkout.css";
function Checkout() {
  return (
    <div className="wrapper">
      <div classNameName="container">
        <form method="post" action="">
          <div className="flexKhung">
            <div className="khungInfo">
              <div class="panel-info">
                <div className="panel-heading1">
                  <h4 className="title">
                    <b>Đơn hàng</b>
                  </h4>
                </div>
                <h3 className="strong-title"> Danh sách dịch vụ </h3>
                  <div class="product-flex">
                    <div>
                      <img className="imageCheck" src="logo192.png" />
                    </div>
                    <div>Cá kho</div>
                    <div>
                      25.000 <span>VNĐ</span>
                    </div>
                  </div>
                  <hr className="hr-payment"/>
                  <div class="product-flex">
                    <div>
                      <img className="imageCheck" src="logo192.png" />
                    </div>
                    <div>Cá kho</div>
                    <div>
                      25.000 <span>VNĐ</span>
                    </div>
                  </div>
                  <hr className="hr-payment"/>
                  <div class="product-flex">
                    <div>
                      <img className="imageCheck" src="logo192.png" />
                    </div>
                    <div>Cá kho</div>
                    <div>
                      25.000 <span>VNĐ</span>
                    </div>
                  </div>
                  <hr className="hr-payment"/>
                  <div class="product-flex">
                    <div>
                      <strong>Tạm tính</strong>
                    </div>
                    <div>
                      <strong>
                        <b>
                          25.000 <span>VNĐ</span>
                        </b>
                      </strong>
                    </div>
                  </div> <br />
                  <div class="product-flex">
                    <div>
                      <strong>Tổng đơn hàng</strong>
                    </div>
                    <div>
                      <strong>
                        <b>
                          25.000 <span>VNĐ</span>
                        </b>
                      </strong>
                    </div>
                  </div>
                </div>
              
            </div>
            {/* Địa chỉ giao hàng */}
            <div className="khungInfo">
              <div className="panel-info">
                <div className="panel-heading1">
                  <h4 className="title">
                    <b>Địa chỉ</b>
                  </h4>
                </div>
                <h3 className="strong-title"> Địa chỉ giao hàng </h3>
                <div className="panel-body">
                  <div>
                    <div>
                      <strong className="strong-title">Tên của bạn <span className="required">(*)</span></strong>
                    </div>
                    <div>
                      <input
                        className="form-input-checkout"
                        placeholder="Tên của bạn.." required
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong className="strong-title">Số điện thoại <span className="required">(*)</span></strong>
                    </div>
                    <div>
                      <input
                        className="form-input-checkout"
                        placeholder="Số điện thoại của bạn.." required type="number"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong className="strong-title">Địa chỉ  <span className="required">(*)</span></strong>
                    </div>
                    <div>
                      <input
                        className="form-input-checkout"
                        placeholder="Địa chỉ của bạn.." required
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong className="strong-title">Thời gian giao hàng  <span className="required">(*)</span></strong>
                    </div>
                    <div>
                      <input className="form-input-checkout" type="date" required />
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong className="strong-title">Số mâm  <span className="required">(*)</span></strong>
                    </div>
                    <div>
                      <input
                        className="form-input-checkout"
                        type="number"
                        placeholder="Số mâm.." required
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong className="strong-title">Ghi chú</strong>
                    </div>
                    <div>
                      <textarea
                        className="form-input-checkout"
                        placeholder="Ghi chú.."
                      />
                    </div>
                  </div>
                  <div>
                    <button className="btn1">Tiếp tục </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
