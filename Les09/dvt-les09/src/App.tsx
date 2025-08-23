import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link, Navigate } from 'react-router-dom';
import TrangChu from './components/Home';
import SanPham from './components/SanPham';
import ListSanPham from './components/ListSanPham';
import SanPham1 from './components/SanPham1';
import SanPham2 from './components/SanPham2';
import Admin from './components/admin';
import NotFound from './components/NotFound';
import Search from './components/Search';

function App() {
  var show = false;
  return (
    <div className="App">
      <Router>
        <header>
          <Routes>
            <Route path="/" element={<TrangChu />} />
            <Route path="/sanpham" element={<SanPham />} />
            <Route path="/list-sanpham" element={<ListSanPham />} >
              <Route path="sanpham" element={<SanPham />} />
              <Route path="sanpham1" element={<SanPham1 />} />
              <Route path="sanpham2" element={<SanPham2 />} />
              <Route path="admin" element={show ? (<Admin />) : (<Navigate replace to="/" />)} />
            </Route>
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <nav>
            <Link to="/">Trang chủ</Link>
            <hr />
            <Link to="/sanpham">Sản phẩm</Link>
            <hr />
            <Link to="/list-sanpham">Danh sách sản phẩm</Link>

          </nav>
        </header>
      </Router>
    </div>
  );
}

export default App;

