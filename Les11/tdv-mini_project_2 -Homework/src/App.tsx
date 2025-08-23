import React from 'react';
import logo from './logo.svg';
import './App.css';
import BannerHome from './components/BannerHome';
import MenuHome from './components/MenuHome';
import ProductHome from './components/ProductHome';
import AboutUSHome from './components/AboutUSHome';
import NewHome from './components/NewHome';
import PartnerHome from './components/PartnerHome';
import ContactHome from './components/ContactHome';
import Footer from './components/Footer';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Header1 from './components/Header1';

function App() {
  return (
<>
<BrowserRouter>
 <Header1 />
 <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/lienhe" element={<Contact />} />
 </Routes>
  <Footer />
</BrowserRouter>
</>
  );
}

export default App;
