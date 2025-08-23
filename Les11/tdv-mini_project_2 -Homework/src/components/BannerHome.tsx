import React from 'react'
import { Link } from 'react-router-dom'

export default function BannerHome() {
    return (
        <div>
            <>
                <section id="banner">
                    <div className="container">
                        <div>
                            <h2 className="cl-1">
                                Thế giới nội thất số 1 việt nam
                                <br />
                                <span className="cl-2">Hoàng hoan</span>
                            </h2>
                            <p>
                                Sứ mệnh của chúng tôi là kết hợp hài hòa giữa ý tưởng và mong muốn của
                                khách hàng, đem lại những phút giây thư giãn tuyệt vời bên gia đình và
                                những người thân yêu.
                            </p>
                            <Link to="/contact">
                                <button>Liên hệ ngay</button>
                            </Link>
                        </div>
                    </div>
                </section>
                {/* End Banner */}
            </>
        </div>
    )
}
