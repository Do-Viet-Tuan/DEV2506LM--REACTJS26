import React from 'react'
import BannerHome from './Home/BannerHome'
import MenuHome from './Home/MenuHome'
import ProductHome from './Home/ProductHome'
import AboutUSHome from './Home/AboutUSHome'
import PartnerHome from './Home/PartnerHome'
import ContactHome from './Home/ContactHome'
import NewHome from './Home/NewHome'
import '../assets/css/fonts.css'
import '../assets/css/layout.css'
import '../assets/css/index.css'

export default function Home({ products, onAddToCart }: any) {
  const handleAddToCart = (pro: any) => {
    // Logic to add item to cart
    onAddToCart(pro);
  }
  return (
    <>
      <BannerHome />
      <MenuHome />
      <ProductHome products={products} onAddToCart={handleAddToCart} />
      <AboutUSHome />
      <NewHome />
      <PartnerHome />
      <ContactHome />
    </>
  )
}
