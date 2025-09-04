import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header1 from './components/Header1';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import axios_devmaster from './api/axios_devmaster';

function App() {
  // khai báo useState
  const [products, setProducts] = useState([
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
  ])

  const [listCart, setListCart] = useState([{
    productid: 0,
    quatity: 0,
    name: "",
    price: 0,
    total: 0,
  }])

  const [cartTotal, setCartTotal] = useState(0);
  // hàm lấy dữ liệu từ API
  const getProduct = async () => {
    var respone = await axios_devmaster.get("Products");
    setProducts(respone.data);
  };
  // xử lý khi tải lại trang

  const getListCart = () => {
    var list = localStorage.getItem("DEV_listCart");

    if (list != null) {
      setListCart(JSON.parse(list))
    }
  }

  const setListCartlocalStorage = () => {
    localStorage.setItem('DEV_listCart', JSON.stringify(listCart))
  }
  useEffect(() => {
    getProduct();
    getListCart();
  }, [])


  const handleAddToCart = (pro: any) => {
    var carts = [];
    var item = {
      productid: pro.id,
      quatity: 1,
      name: pro.title,
      price: pro.priceNew,
      total: pro.priceNew,
    }
    if (listCart[0].productid === 0) {
      carts.push(item);
      setListCart(carts);
    } else {
      if (getIndexByProductId(listCart, pro) === -1) {
        carts.push(item);
      } else {
        console.log("Sản phẩm đã có trong giỏ hàng");
      }
      setListCart(carts);
    }
  }

  const getIndexByProductId = (list: any, product: any) => {
    for (let index = 0; index < list.length; index++) {
      if (list[index].productid === product.id) {
        return index;
      }
    }
    return -1;
  };
  return (
    <>
      <BrowserRouter>
        <Header1 />
        <Routes>
          <Route path='/' element={<Home products={products} onAdd={handleAddToCart}></Home>}></Route>
          <Route path='/lienhe' element={<Contact></Contact>}></Route>
          {/* <Route path='/cart' element={<Cart listCart={listCart}></Cart>} /> */}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>

  );
}

export default App;
