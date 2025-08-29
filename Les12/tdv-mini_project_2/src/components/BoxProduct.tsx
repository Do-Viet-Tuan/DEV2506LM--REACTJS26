import React from 'react'
import { NavLink } from 'react-router-dom'


export default function BoxProduct({ item, index, onAddToCart }: any) {
    const handleAddToCart = () => {
        // Logic to add item to cart
        onAddToCart(item.id);
    }

    return (
        <>
            <div className="box-product">
                <div>
                    <div className="img-product">
                        <img src={"http://apixm.devmaster.vn/" + item.image} alt="item.image" className='w-100' />
                        <div className='btns-product'>
                            <div className='btn-product btn-add-cart'>
                                <p><span onClick={handleAddToCart}><i className="fa-solid fa-cart-plus"></i></span></p>
                                <p><span onClick={handleAddToCart}><i className="fa-solid fa-eye"></i></span></p>
                            </div>
                        </div>
                    </div>
                    <p></p>
                    <h3 className="title-product">
                        <a href="#">{item.title}</a>
                    </h3>
                    <p className="start-product">
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                        <span>
                            <i className="fa-solid fa-star" />
                        </span>
                    </p>
                    <p className="subtitle-product">{item.size}</p>
                    <p className="price-product">{item.priceNew}</p>
                    <p />
                </div>                
            </div>
        </>
    )
}
