import React from 'react'
import IStudent from './IStudent';

interface StudentProps {
  student: IStudent;
}

export default function Student1({ student }: StudentProps) {
  return (
    // <div>
    <tr>
      <td className='text-center'>{student.id}</td>
      <td className='text-center'>{student.msv}</td>
      <td className='text-center'>{student.name}</td>
      <td className='text-center'>{student.age}</td>
      <td className='text-center'>{student.gioiTinh}</td>
      <td className='text-center'>
        <button id="btnView" className="btn btn-success rounded-0">
          Xem
        </button>
        <button id="btnEdit" className="btn btn-warning rounded-0">
          Sửa
        </button>
        <button id="btnDel" className="btn btn-danger rounded-0">
          Xóa
        </button>
      </td>
    </tr>
    // </div>
  )
}
