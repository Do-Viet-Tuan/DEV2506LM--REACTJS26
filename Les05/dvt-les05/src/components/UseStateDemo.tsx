import { parse } from 'path';
import React, { useState } from 'react'

export default function UseStateDemo() {
    //1. Khoi tao state su dung ham useState
    const [count, setCount] = useState(0);//bien state (count=0) gia tri khoi tao ban dau

    //2. Khoi tao state la mot mang
    const listInit = [1,4,2,5]
    const [list, setList] = useState(listInit)

    // Ham xu ly su kien khi them phan tu moi vao danh sach
    const handleList = () => {
        setList([
            ...list,
            parseInt((Math.random() * 100).toString()) // Tao so nguyen ngau nhien tu 1 den 100
        ])
    }


    //3. Khoi tao state la mot object
    const personInit = {
        id: 888,
        name: "Thanh Tung",
        age: 18
    }
    const [person, setPerson] = useState(personInit)

    return (
        <div className='alert alert-danger'>
            <h2>Su dung ham useState</h2>
            <p>Gia tri hien tai cua count: {count}</p>
            <div>
                <button onClick={() => setCount(count + 1)}>Tang +</button>
                <button onClick={() => setCount(count - 1)}>Giam -</button>
            </div>
            <hr />
            <h3>Danh sach so nguyen; List: {list.toString()}</h3>
            <button onClick={handleList}>add new</button>
            <h3>Person: 
                <br />id: {person.id}, Name = {person.name}, Age = {person.age}</h3>
        </div>
    )
}
