import React from 'react'

export default function FuncComp2(props: any) {
  return (
    <div>
        <h2>Bai tap</h2>
        <div className='alert alert-info'>
            <p>Full Name: {props.fullName}</p>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
            <p>Address: {props.address}</p>
        </div>
    </div>
  )
}
