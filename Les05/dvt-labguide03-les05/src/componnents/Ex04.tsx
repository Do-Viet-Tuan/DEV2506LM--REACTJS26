import React, { useEffect, useRef, useState } from 'react'

export default function Ex04() {
    const inputRef = useRef<HTMLInputElement>(null); // Khởi tạo useRef để giữ tham chiếu đến input
    // Sử dụng useRef để giữ giá trị trước đó của input
    const [inputValue, setInputValue] = useState("");
    const preValue = useRef("");

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus(); // Tự động focus vào input khi component mount
        }
    }, []);

    useEffect(() => {
        // Lưu giá trị trước đó vào preValue
        preValue.current = inputValue;
    }, [inputValue]);

    return (
        <div className='alert alert-warning'>
            <p>Example 04</p>
            <p>Tao mot input field co the focus tu dong khi component mount</p>
            <p>Su dung useRef de giu gia tri truoc do cua input</p>
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Nhap gia tri"
            />
            <p>Gia tri truoc do: {preValue.current}</p>
        </div>
    )
}
