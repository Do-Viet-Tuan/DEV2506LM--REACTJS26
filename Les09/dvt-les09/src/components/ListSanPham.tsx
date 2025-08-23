import React from 'react'
import { Link, NavLink, Outlet, } from 'react-router-dom'


export default function ListSanPham() {
    var navStyle = {
        color: 'black',
        textDecoration: 'none',
        fontWeight: 'normal',
        background: 'blue',
    }

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <nav>
                <NavLink to="/list-sanpham/sanpham" style={navStyle}>Sản phẩm</NavLink>
            <hr />
            <NavLink to="/list-sanpham/sanpham1" style={navStyle}>Sản phẩm 1</NavLink>
            <hr />
            <NavLink to="/list-sanpham/sanpham2" style={navStyle}>Sản phẩm 2</NavLink>
            <hr />
            <NavLink to="/list-sanpham/useNavigate" style={navStyle}>useNavigate</NavLink>
            <Outlet />
        </nav>

    </div>

  )
}
