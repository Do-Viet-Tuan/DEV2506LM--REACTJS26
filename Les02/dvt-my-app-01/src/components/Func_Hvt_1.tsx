import React from 'react'

export default function Func_Hvt_1() {
  const name = "Thanh Tung";
  const user = {
    name: "Tung",
    age: 31,
  }
  // hàm
  const formatName = (u: any) => {
    return u.name + " -- " + u.age;
  }

  //element
  const element = (
    <div className='alert alert-warning'>
      <h2> Xin chao, {name}</h2>
      <h3>Welcome, {formatName(user)}</h3>
    </div>
  )
  // ham co rest parameter
  const sum = (...nums: number[]): number => {
    return nums.reduce((sum, nums) => sum + nums, 0);
  }
  // hàm trừ
  const sub = (...nums: number[]): number => {
    return nums.reduce((sub, nums) => sub - nums, 0);
  }
  // hàm chia
  const div = (...nums: number[]): number => {
    return nums.reduce((div, nums) => div / nums, 1);
  }
  // hàm cộng
  const mul = (...nums: number[]): number => {
    return nums.reduce((mul, nums) => mul * nums, 1);
  }
  return (
    <div>
      <h2>Func_Hvt_1</h2>
      <p>Xin chao: {name}</p>
      <p>Ho Ten: {user.name}</p>
      <p>Tuoi: {user.age}</p>
      <p>Goi ham: Xin chao {formatName(user)}</p>
      <hr />
      {element}
      <hr />
      <p>ket qua cong: {sum(1, 2, 3, 4)}</p>
      <p>ket qua tru: {sub(10, 5, 2)}</p>
      <p>ket qua chia: {div(10, 5, 2)}</p>
      <p>ket qua nhan: {mul(10, 5, 2)}</p>
    </div>
  )
}
