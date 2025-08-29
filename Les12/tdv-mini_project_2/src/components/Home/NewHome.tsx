import React from 'react'

export default function NewHome() {
    return (
        <div>  {/* Begin News */}
            <section id="news">
                <div className="container-2">
                    <h2>Tin tức</h2>
                    <div className="d-flex justify-content-between">
                        <div id="news-left">
                            <div className="imgs-news">
                                <img
                                    src="assets/imgs/tin-tuc/tintuc-1.jpg"
                                    alt="tintuc-1.jpg"
                                    className="w-100"
                                />
                            </div>
                            <div className="news-content">
                                <div>
                                    <h3>
                                        <a href="#">
                                            Cách chọn Sofa cho phòng khách nhà bạn thêm phần sang trọng
                                        </a>
                                    </h3>
                                    <p>
                                        Home furniture, interior design furniture, bedroom furniture,
                                        wooden furniture - find photography of them all in our gallery
                                        of furniture photos. Everything is licensed under the free
                                        Pexels license. Find the best stock free photos here.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="news-right">
                            <div className="box-news">
                                <div className="imgs-news">
                                    <img
                                        src="assets/imgs/tin-tuc/tintuc-1.png"
                                        alt="tintuc-1.png"
                                        className="w-100"
                                    />
                                </div>
                                <div className="news-content">
                                    <a href="#">
                                        <h3>Trang trí phòng khách cho thêm năng động</h3>
                                    </a>
                                    <p>
                                        Home furniture, interior design furniture, bedroom furniture,
                                        wooden furniture - find photography of them all in our gallery
                                        of furniture photos. Everything is licensed under the free
                                        Pexels license. Find the best stock free photos here.
                                    </p>
                                </div>
                            </div>
                            <div className="box-news">
                                <div className="imgs-news">
                                    <img
                                        src="assets/imgs/tin-tuc/tintuc-2.png"
                                        alt="tintuc-2.png"
                                        className="w-100"
                                    />
                                </div>
                                <div className="news-content">
                                    <a href="#">
                                        <h3>Cập nhật xu hướng phòng khách phong cách tối giản</h3>
                                    </a>
                                    <p>
                                        Home furniture, interior design furniture, bedroom furniture,
                                        wooden furniture - find photography of them all in our gallery
                                        of furniture photos. Everything is licensed under the free
                                        Pexels license. Find the best stock free photos here.
                                    </p>
                                </div>
                            </div>
                            <div className="box-news">
                                <div className="imgs-news">
                                    <img
                                        src="assets/imgs/tin-tuc/tintuc-3.png"
                                        alt="tintuc-3.png"
                                        className="w-100"
                                    />
                                </div>
                                <div className="news-content">
                                    <a href="#">
                                        <h3>Cách sắp xếp vị trí bàn ăn và nhà bếp một cách rộng rãi</h3>
                                    </a>
                                    <p>
                                        Home furniture, interior design furniture, bedroom furniture,
                                        wooden furniture - find photography of them all in our gallery
                                        of furniture photos. Everything is licensed under the free
                                        Pexels license. Find the best stock free photos here.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <a href="#">
                                    Xem thêm
                                    <span>
                                        <i className="fa-solid fa-arrow-right-long" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End News */}
        </div>
    )
}
