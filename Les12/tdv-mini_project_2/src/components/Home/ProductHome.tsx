import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import BoxProduct from '../BoxProduct';
import { cp } from 'fs';

const SliderCustom: any = Slider;
export default function ProductHome({ products, onAddToCart }: any) {

    // const [products, setProducts] = useState([
    //     {
    //         "id": 0,
    //         "cid": 0,
    //         "code": "",
    //         "title": "",
    //         "description": "",
    //         "content": "",
    //         "image": "",
    //         "metaTitle": "",
    //         "metaKeyword": "",
    //         "metaDescription": "",
    //         "slug": "",
    //         "priceOld": 0,
    //         "priceNew": 0,
    //         "size": "",
    //         "views": 0,
    //         "likes": 0,
    //         "star": null,
    //         "home": 0,
    //         "hot": null,
    //         "createdDate": "",
    //         "updatedDate": "",
    //         "adminCreated": null,
    //         "adminUpdated": null,
    //         "status": 1,
    //         "isdelete": null
    //     }
    // ])

    const [productHot, setProductHot] = useState([
        {
            "id": 0,
            "cid": 0,
            "code": "",
            "title": "",
            "description": "",
            "content": "",
            "image": "",
            "metaTitle": "",
            "metaKeyword": "",
            "metaDescription": "",
            "slug": "",
            "priceOld": 0,
            "priceNew": 0,
            "size": "",
            "views": 0,
            "likes": 0,
            "star": null,
            "home": 0,
            "hot": null,
            "createdDate": "",
            "updatedDate": "",
            "adminCreated": null,
            "adminUpdated": null,
            "status": 1,
            "isdelete": null
        }

    ]);

    // const getProduct = async () => {
    //     var respone = await axios.get("Products");
    //     setProducts(respone.data);
    // };
    const getProductHot = async () => {
        var list = products.filter((item: any) => item.hot == 1);
        setProductHot(list);
        // console.log(products);
    };
    // useEffect(() => {
    //     getProduct();
    // }, [])
    useEffect(() => {
        getProductHot();
    }, [products])

    const PrevArrow = (props: any) => (
        <button {...props} type="button" className="slick-prev slick-arrow ">&lt;</button>
    );

    const NextArrow = (props: any) => (
        <button {...props} type="button" className="slick-next slick-arrow">&gt;</button>
    );


    var settings = {
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "k"
            // instead of a settings object
        ]
    }
    const handleAddToCart = (pro: any) => {
        // Logic to add item to cart
        onAddToCart(pro);
    }

    return (
        <>

            {/* Begin Products */}
            <section id="products">
                <div className="container">
                    <h2>Sản phẩm nổi bật</h2>

                    <div id="list-product">
                        <SliderCustom {...settings}>

                            {
                                productHot.map((item: any, index: any) => {
                                    return <BoxProduct key={index} item={item} onAddToCart={(pro:any) => handleAddToCart(pro.id)} />

                                })
                            }


                        </SliderCustom>

                    </div>
                </div>
            </section>
            {/* End Products */}
        </>
    )
}
