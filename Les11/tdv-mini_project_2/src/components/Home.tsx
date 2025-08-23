import React from 'react'
import BannerHome from './BannerHome'
import MenuHome from './MenuHome'
import ProductHome from './ProductHome'
import AboutUSHome from './AboutUSHome'
import PartnerHome from './PartnerHome'
import ContactHome from './ContactHome'
import NewHome from './NewHome'
import '../assets/css/fonts.css'
import '../assets/css/layout.css'
import '../assets/css/index.css'

export default function Home() {
  return (
    <div>
          <BannerHome />
          <MenuHome />  
          <ProductHome />
          <AboutUSHome />
          <NewHome />
          <PartnerHome />
          <ContactHome />
    </div>
  )
}
