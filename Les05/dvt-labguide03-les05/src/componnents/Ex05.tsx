import React, { useEffect, useState } from 'react'

export default function Ex05() {

    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let timer: ReturnType<typeof setInterval>; // Khai báo đúng kiểu cho TypeScript
        if (running) {
            timer = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [running]);

    // Hàm xử lý khi reset
    const handleReset = () => {
        setCount(0);
        setRunning(false); // Dừng bộ đếm luôn
    };

    return (
        <div className='alert alert-danger'>
            <p>Example 05</p>
            <p>Bo dem tu dong (useEffect + setInterval)</p>
            <p>Tao mot bo dem tu dong tang gia tri moi giay</p>
            <p>Cho phep nguoi dung bat dau/tam dung bo dem</p>

            <h2>Gia tri: {count}</h2>
            <button onClick={() => setRunning(!running)}>{running ? 'Tam dung' : 'Bat dau'}</button>
            <button onClick={handleReset}>Dat lai</button>
            <p>{running ? 'Bo dem dang chay...' : 'Bo dem da dung'}</p>
            <p>Click "Bat dau" de bat dau bo dem, "Tam dung" de tam dung bo dem</p>

        </div>
    )
}
