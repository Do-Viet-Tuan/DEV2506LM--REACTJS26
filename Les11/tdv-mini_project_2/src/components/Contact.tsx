import React from 'react'
import '../assets/css/fonts.css'
import '../assets/css/layout.css'
import '../assets/css/lienhe.css'

export default function Contact() {
    return (
        <div>  {/* End Header */}
            {/*Begin Banner*/}
            <section id="banner-contact">
                <div className="img-banner">
                    <img className="w-100" src="assets/imgs/lienhe/LIENHE-bg.jpg" alt="LIENHE-bg" />
                </div>
                <div className="box-banner">
                    <div className="logo-banner">
                        <img
                            className="w-100"
                            src="assets/imgs/lienhe/LIENHE-logo.png"
                            alt="LIENHE-logo"
                        />
                    </div>
                    <h2 className="title-banner">Lien He</h2>
                </div>
            </section>
            {/*End Banner*/}
            {/*Begin Contact*/}
            <section id="contact-contact">
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="col-6 contact-left">
                                <div className="img-contact">
                                    <img src="assets/imgs/lienhe/LIENHE-form.jpg" alt="LIENHE-form" />
                                </div>
                            </div>
                            <div className="col-6 contact-right">
                                <form
                                    action=""
                                    method="post"
                                    encType="multipart/form-data"
                                    id="form"
                                >
                                    <h3>Lien he voi chung toi</h3>
                                    <div className="input-group">
                                        <p className="err err-blank"> Ho ten khong duoc de trong</p>
                                        <input type="text" name="name" id="name" placeholder="Ho ten" />
                                    </div>
                                    <div className="input-group">
                                        <p className="err err-blank"> Email khong duoc de trong</p>
                                        <p className="err err-email"> Email khong dung dinh dang</p>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="input-group">
                                        <p className="err err-blank"> SDT khong duoc de trong</p>
                                        <p className="err err-phone"> SDT khong dung dinh dang</p>
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            placeholder="so dien thoai"
                                        />
                                    </div>
                                    <div className="input-group">
                                        <p className="err err-blank"> Noi dung khong duoc de trong</p>
                                        <input
                                            type="text"
                                            name="content"
                                            id="content"
                                            placeholder="noi dung"
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        name="submit"
                                        id="submit"
                                        defaultValue="Gui"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End contact*/}</div>
    )
}
