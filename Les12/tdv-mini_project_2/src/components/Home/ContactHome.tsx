import React from 'react'

export default function ContactHome() {
    return (
        <div>
            {/* Begin Liên hệ */}
            <section id="contact">
                <div className="container d-flex justify-content-between">
                    <div className="contact-left">
                        <p>
                            Trải nghiệm dịch vụ
                            <br />
                            <span>cùng Hoàng Hoan ngay</span>
                        </p>
                    </div>
                    <div className="contact-right">
                        <div>
                            <p>Thông tin liên hệ</p>
                            <div>
                                <input
                                    type="text"
                                    name="lienhe"
                                    id="lienhe"
                                    placeholder="Email/Số điện thoại"
                                />
                                <button>Gửi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Liên hệ */}
        </div>
    )
}
