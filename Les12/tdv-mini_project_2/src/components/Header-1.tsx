import React from 'react'

export default function Header1() {
    return (
        <div>
            <>
                {/* Begin Header */}
                <header>
                    <div className="container container-md">
                        <div className="d-flex justify-content-between">
                            <div id="header-logo">
                                <img className="w-100" src="assets/imgs/llogo.png" alt="logo" />
                            </div>
                            <div id="header-nav">
                                <nav className="navbar navbar-expand-md">
                                    <div className="container-fluid">
                                        <button
                                            className="navbar-toggler"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#navbarNav"
                                            aria-controls="navbarNav"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation"
                                        >
                                            <span className="navbar-toggler-icon" />
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarNav">
                                            <ul className="navbar-nav">
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page" href="#">
                                                        Trang chủ
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">
                                                        Giới thiệu
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">
                                                        Sản phẩm
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">
                                                        Tin tức
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">
                                                        Đối tác
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link " href="#">
                                                        Liên hệ
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Header */}
            </>
        </div>
    )
}
