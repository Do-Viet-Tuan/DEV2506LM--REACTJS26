import React from 'react'

export default function Footer() {
    return (
        <div>  {/* Begin Footer */}
            <footer>
                <div className="container">
                    <div className="d-md-flex justify-content-between">
                        <div className="mb-4 mb-md-0" id="footer-info">
                            <h4>Thông tin chung</h4>
                            <h5>Công ty hoàng hoan</h5>
                            <p>
                                <span>
                                    <i className="fa-solid fa-phone" />
                                </span>
                                0999.999.999
                            </p>
                            <p>
                                <span>
                                    <i className="fa-solid fa-envelope" />
                                </span>
                                cskh@hoanghoan.vn
                            </p>
                            <address>
                                <span>
                                    <i className="fa-solid fa-location-dot" />
                                </span>
                                Số 1 Nguyễn Trãi, Thanh Xuân, Hà Nội
                            </address>
                        </div>
                        <div className="mb-4 mb-md-0" id="footer-about-us">
                            <h4>Về chúng tôi</h4>
                            <nav>
                                <ul>
                                    <li>
                                        <a href="#">Giới thiệu</a>
                                    </li>
                                    <li>
                                        <a href="#">Sản phẩm</a>
                                    </li>
                                    <li>
                                        <a href="#">Tin tức</a>
                                    </li>
                                    <li>
                                        <a href="#">Đối tác</a>
                                    </li>
                                    <li>
                                        <a href="#">Liên hệ</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="mb-4 mb-md-0" id="footer-connect">
                            <h4>Kết nối với chúng tôi</h4>
                            <div className="d-flex">
                                <div className="footer-icon icon-facebook">
                                    <a href="#">
                                        <img
                                            className="w-100"
                                            src="assets/imgs/logo-footer/icon-facebook.png"
                                            alt="icon-facebook"
                                        />
                                    </a>
                                </div>
                                <div className="footer-icon icon-zalo">
                                    <a href="#">
                                        <img
                                            className="w-100"
                                            src="assets/imgs/logo-footer/icon-zalo.png"
                                            alt="icon-zalo"
                                        />
                                    </a>
                                </div>
                                <div className="footer-icon icon-mail d-flex">
                                    <a href="#" className="m-auto">
                                        <img
                                            className="w-100"
                                            src="assets/imgs/logo-footer/icon-mail.png"
                                            alt="icon-mail"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="icon-dathongbao">
                                    <img
                                        className="w-100"
                                        src="assets/imgs/logo-footer/icon-dathongbao.png"
                                        alt="icon-dathongbao"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End Footer */}</div>
    )
}
