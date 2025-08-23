import React from 'react'
import { Link } from 'react-router-dom'

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
                                        <Link to="/about">Giới thiệu</Link>
                                    </li>
                                    <li>
                                        <Link to="/products">Sản phẩm</Link>
                                    </li>
                                    <li>
                                        <Link to="/news">Tin tức</Link>
                                    </li>
                                    <li>
                                        <Link to="/partners">Đối tác</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Liên hệ</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="mb-4 mb-md-0" id="footer-connect">
                            <h4>Kết nối với chúng tôi</h4>
                            <div className="d-flex">
                                <div className="footer-icon icon-facebook">
                                    <Link to="#">
                                        <img
                                            className="w-100"
                                            src="assets/imgs/logo-footer/icon-facebook.png"
                                            alt="icon-facebook"
                                        />
                                    </Link>
                                </div>
                                <div className="footer-icon icon-zalo">
                                    <Link to="#">
                                        <img
                                            className="w-100"
                                            src="assets/imgs/logo-footer/icon-zalo.png"
                                            alt="icon-zalo"
                                        />
                                    </Link>
                                </div>
                                <div className="footer-icon icon-mail d-flex">
                                    <Link to="#" className="m-auto">
                                        <img
                                            className="w-100"
                                            src="assets/imgs/logo-footer/icon-mail.png"
                                            alt="icon-mail"
                                        />
                                    </Link>
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
