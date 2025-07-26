import React, { useEffect } from 'react'

export default function Ex06() {
    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            event.preventDefault();
            event.returnValue = ''; // Hiển thị hộp thoại xác nhận
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);
    return (
        <div className='alert alert-info'>
            <p>Example 06</p>
            <p>Hien thi cua so xac nhan khi roi trang (useEffect)</p>
            <p>Mo ta:</p>
            <p>Hien thi canh bao khi nguoi dung co tinh roi trang</p>

            <h2>Trang web nay se canh bao khi nguoi dung co tinh roi trang</h2>

    </div>
  )
}
