import React from 'react'

export default function FunMember(props: any) {
  return (
    <div className='d-flex border p-1'>
        <div className='p-1'>{props.name}</div>
        <div className='p-1'>{props.age}</div>
    </div>
  )
}
