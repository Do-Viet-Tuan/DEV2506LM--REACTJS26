import React from 'react'
import { NavLink } from 'react-router-dom';

export default function MenuHome() {
    return (
        <div>  {/* Begin Menu */}
            <section id="menu">
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="box-menu col-3 d-flex justify-content-center">
                                <div>
                                    <div className="logo-menu">
                                        <img
                                            className="w-100"
                                            src="assets/imgs/danhmuc/dm_phongkhach.jpg"
                                            alt="dm_phongkhach"
                                        />
                                    </div>
                                    <p>
                                        <NavLink to="/san-pham">Phòng khách</NavLink>
                                    </p>
                                </div>
                            </div>
                            <div className="box-menu col-3 d-flex justify-content-center">
                                <div>
                                    <div className="logo-menu">
                                        <img
                                            className="w-100"
                                            src="assets/imgs/danhmuc/dm_phongngu.jpg"
                                            alt="dm_phongngu"
                                        />
                                    </div>
                                    <p>
                                        <NavLink to="/san-pham">Phòng ngủ</NavLink>
                                    </p>
                                </div>
                            </div>
                            <div className="box-menu col-3 d-flex justify-content-center">
                                <div>
                                    <div className="logo-menu">
                                        <img
                                            className="w-100"
                                            src="assets/imgs/danhmuc/dm_phongbep.jpg"
                                            alt="dm_phongbep"
                                        />
                                    </div>
                                    <p>
                                        <NavLink to="/san-pham">Phòng bếp</NavLink>
                                    </p>
                                </div>
                            </div>
                            <div className="box-menu col-3 d-flex justify-content-center">
                                <div>
                                    <div className="logo-menu">
                                        <img
                                            className="w-100"
                                            src="assets/imgs/danhmuc/dm_phongtam.jpg"
                                            alt="dm_phongtam"
                                        />
                                    </div>
                                    <p>
                                        <NavLink to="/san-pham">Phòng tắm</NavLink>
                                    </p>
                                </div>
                            </div>
                            <div className="box-menu col-3 d-flex justify-content-center">
                                <div>
                                    <div className="logo-menu">
                                        <img
                                            className="w-100"
                                            src="assets/imgs/danhmuc/dm_treem.jpg"
                                            alt="dm_treem"
                                        />
                                    </div>
                                    <p>
                                        <NavLink to="/san-pham">Trẻ em</NavLink>
                                    </p>
                                </div>
                            </div>
                            <div className="box-menu col-3 d-flex justify-content-center">
                                <div>
                                    <div className="logo-menu">
                                        <img
                                            className="w-100"
                                            src="assets/imgs/danhmuc/dm_vanphong.jpg"
                                            alt="dm_vanphong"
                                        />
                                    </div>
                                    <p>
                                        <NavLink to="/san-pham">Văn Phòng</NavLink>
                                    </p>
                                </div>
                            </div>
                            <div className="box-menu col-3 d-flex justify-content-center">
                                <div>
                                    <div className="logo-menu">
                                        <img
                                            className="w-100"
                                            src="assets/imgs/danhmuc/dm_cauthang.jpg"
                                            alt="dm_cauthang"
                                        />
                                    </div>
                                    <p>
                                        <NavLink to="/san-pham">Cầu thang</NavLink>
                                    </p>
                                </div>
                            </div>
                            <div className="box-menu col-3 d-flex justify-content-center">
                                <div>
                                    <div className="logo-menu">
                                        <img
                                            className="w-100"
                                            src="assets/imgs/danhmuc/dm_dotrangtri.jpg"
                                            alt="dm_dotrangtri"
                                        />
                                    </div>
                                    <p>
                                        <NavLink to="/san-pham">Đồ trang trí</NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Menu */}
        </div>
    )
}
