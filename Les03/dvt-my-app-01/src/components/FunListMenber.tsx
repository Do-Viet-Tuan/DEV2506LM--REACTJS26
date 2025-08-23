import React from 'react'
import FunMember from './FunMember'

export default function FunListMenber() {
  return (
    <div className='border p-2'>
      <h2>Danh sach thanh vien</h2>
      <FunMember name="Thanh Tung Nguyen" age={31} />
      <FunMember name="Nguyen Van Binh" age={22} />
      <FunMember name="Le Thi Hoa" age={24} />
      <FunMember name="Pham Quoc Minh" age={20} />
      <FunMember name="Tran Thi Bich" age={23} />
      <FunMember name="Nguyen Gia Huy" age={21} />
      <FunMember name="Doan Minh Chau" age={26} />
      <FunMember name="Hoang Tuan Anh" age={25} />
      <FunMember name="Pham Van Tien" age={27} />
      <FunMember name="Nguyen Van Nam" age={22} />
    </div>
  )
}
