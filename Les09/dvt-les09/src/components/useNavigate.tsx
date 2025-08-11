import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SanPham1 = () => {
  const navigate = useNavigate(); // ✅ Dùng hook có sẵn

  useEffect(() => {
    const allowed = false;
    if (!allowed) {
      navigate('/', { replace: true }); // ✅ Chuyển hướng
    }
  }, [navigate]);

  return <div>Trang Sản Phẩm 1</div>;
};

export default SanPham1;
