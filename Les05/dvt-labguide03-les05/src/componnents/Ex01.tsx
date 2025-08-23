import React, { useState } from 'react'

export default function Ex01() {
    const [count, setCount] = useState(0);
    return (
        <div className='alert alert-primary'>
            <h2>Example 01</h2>
            <p>Bài tập 1: Bộ đếm số đơn giản (useState)
                Mô tả:
                Tạo một component Counter sử dụng useState để tăng/giảm số đếm khi nhấn nút.
                Hiển thị giá trị của bộ đếm trên giao diện</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Tang</button>
            <button onClick={() => setCount(count - 1)}>Giam</button>
        </div>
    )
}
