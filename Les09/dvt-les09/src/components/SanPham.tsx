import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SanPham = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Lấy giá trị
  const id = searchParams.get('id');
  const category = searchParams.get('category');

  const handleChangeQuery = () => {
    // Đổi URL: ?id=456&category=xyz
    setSearchParams({ id: '456', category: 'xyz' });
  };

  return (
    <div>
      <h2>Trang Sản phẩm</h2>
      <p>ID: {id}</p>
      <p>Category: {category}</p>
      <button onClick={handleChangeQuery}>Thay đổi Query String</button>
    </div>
  );
};

export default SanPham;
