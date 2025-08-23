import React from 'react'

export default function AboutUSHome() {
  return (
    <div>  {/* Begin About Us */}
  <section id="about-us">
    <div id="about-us-top" className="container">
      <h2>Về chúng tôi</h2>
      <div className="row">
        <div id="about-us-left" className="col-6">
          <div className="img-about-us">
            <img
              className="w-100"
              src="assets/imgs/ve-chung-toi/ve-chung-toi.jpg"
              alt=""
            />
          </div>
        </div>
        <div id="about-us-right" className="col-6">
          <div>
            <h3>
              Nội thất <span>Hoàng Hoan</span> <br />
              UY TÍN SONG HÀNH CHẤT LƯỢNG
            </h3>
            <p>
              Nội thất <span>Hoàng Hoan</span> chúng tôi tự hào là đứa con tinh
              thần ra đời sau hơn 30 năm hoạt động trong lĩnh vực kinh doanh đồ
              gỗ nội thất với thương hiệu ĐỒ GỖ HOÀNG HOAN nổi tiếng.
            </p>
            <p>
              Tài nguyên của chúng tôi là đội ngũ kiến trúc sư tốt nghiệp ĐH
              Kiến Trúc Hà Nội với nhiều năm kinh nghiệm, luôn tràn đầy nhiệt
              huyết và sức sáng tạo của tuổi trẻ. Thế mạnh của chúng tôi là sở
              hữu xưởng nội thất hơn 10.000m2 tại Hà Nội sản xuất đa dạng các
              sản phẩm với giá cả luôn cạnh tranh.
            </p>
            <div id="list-img-about-us">
              <div className="img-about-us">
                <img
                  className="w-100"
                  src="assets/imgs/ve-chung-toi/ve-chung-toi-1.jpg"
                  alt="ve-chung-toi-1.jpg"
                />
              </div>
              <div className="img-about-us">
                <img
                  className="w-100"
                  src="assets/imgs/ve-chung-toi/ve-chung-toi-2.jpg"
                  alt="ve-chung-toi-2.jpg"
                />
              </div>
              <div className="img-about-us">
                <img
                  className="w-100"
                  src="assets/imgs/ve-chung-toi/ve-chung-toi-3.jpg"
                  alt="ve-chung-toi-3.jpg"
                />
              </div>
              <div className="img-about-us">
                <a href="#">
                  <img
                    className="w-100"
                    src="assets/imgs/ve-chung-toi/ve-chung-toi-4.jpg"
                    alt="ve-chung-toi-4.jpg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="about-us-bottom" className="container">
      <h2>Tại sao nên chọn hoàng hoan</h2>
      <div className="row">
        <div className="box-left box-about-us-bottom col-6">
          <div>
            <div className="logo-about-us-bottom">
              <img
                src="assets/imgs/ve-chung-toi/chinh-sach.jpg"
                alt="chinh-sach.jpg"
              />
            </div>
            <div className="title-about-us-bottom">
              <h3>Chính sách về giá</h3>
              <p>Tốt nhất và công khai giá trên website</p>
            </div>
          </div>
        </div>
        <div className="box-right box-about-us-bottom col-6">
          <div>
            <div className="logo-about-us-bottom">
              <img src="assets/imgs/ve-chung-toi/san-pham.jpg" alt="san-pham.jpg" />
            </div>
            <div className="title-about-us-bottom">
              <h3>Sản xuất</h3>
              <p>Trực tiếp sản xuất bởi đội ngũ nhân viên hàng đầu</p>
            </div>
          </div>
        </div>
        <div className="box-left box-about-us-bottom col-6">
          <div>
            <div className="logo-about-us-bottom">
              <img
                src="assets/imgs/ve-chung-toi/chat-luong.jpg"
                alt="chat-luong.jpg"
              />
            </div>
            <div className="title-about-us-bottom">
              <h3>Chất lượng</h3>
              <p>Cam kết chất lượng sản phẩm và tiến độ thi công</p>
            </div>
          </div>
        </div>
        <div className="box-right box-about-us-bottom col-6">
          <div>
            <div className="logo-about-us-bottom">
              <img src="assets/imgs/ve-chung-toi/bao-hanh.jpg" alt="bao-hanh.jpg" />
            </div>
            <div className="title-about-us-bottom">
              <h3>Bảo hành</h3>
              <p>Dịch vụ bảo hành sản phẩm tốt nhất khu vực</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End About Us */}</div>
  )
}
