import React, {useEffect, useState } from 'react'

export default function UseEffectDemo() {
    //1. Su dung useEffect de thuc hien mot ham callback sau khi component duoc render
    useEffect(() => {
        console.log("Day la callback cua useEffect");
    }, []);
    //2. callback and array empty
    useEffect(() => {
        console.log("Day la callback cua useEffect voi array rong");
    }, []);
    //3. callback and array with dependencies
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);
    useEffect(() => {
        console.log("Callback and [deps]", count);
    }, [count]);
    return (
        <div className='alert alert-info'>
            <h2>Su dung hook useEffect</h2>
            <button onClick={() => setCount(count + 1)}>Tang count: {count} </button>
        </div>
  )
}
