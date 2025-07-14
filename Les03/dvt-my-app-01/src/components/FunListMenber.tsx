import React from 'react'
import FunMember from './FunMember'

export default function FunListMenber() {
  return (
    <div className='border p-2'>
        <h2>Danh sach thanh vien</h2>
        <FunMember name="Thanh Tung" age={31} />
        <FunMember name="Nguyen Van A" age={25} />
        <FunMember name="Nguyen Van B" age={26} />
        <FunMember name="Nguyen Van C" age={27} />
        <FunMember name="Nguyen Van D" age={28} />
    </div>
  )
}
