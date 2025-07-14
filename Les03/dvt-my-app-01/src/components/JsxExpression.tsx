import React from 'react'

export default function JsxExpression() {
    const name = "Devmaster";
    const user = {
        name: "Tuan",
        age: 18,
    }
    // hàm
    const formatName = (u:any) => {
        return u.name + " - " + u.age;
    } 

    //element
    const element = (
        <div className='alert alert-danger'>
            <h2> Xin chao, {name}</h2>
            <h3>Welcome, {formatName(user)}</h3>
        </div>
    )
    // ham co rest parameter
    const sum = (...nums: number[]):number => {
    //     let tong: number = 0;
    //     for (let i = 0; i < nums.length; i++) {
    //         tong += nums[i];
    //     }
    //     return tong;
        return nums.reduce((sum,nums) => sum + nums, 0);
    }
  return (
    <div>
        <h2>JsxExpression</h2>
        <hr />
        <p>Xin chao: {name}</p>
        <p>Ho Ten: {user.name}</p>
        <p>Tuoi: {user.age}</p>
        <p>Goi ham: {formatName(user)}</p>
        <hr />
        {element}
        <hr />
        <p>ket qua: {sum(1, 2, 3, 4)}</p>
        <p>ket qua: {sum(1, 2, 3, 4, 5, 6, 7)}</p>
    </div>
  )
}
