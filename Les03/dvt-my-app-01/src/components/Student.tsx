import React from 'react'
import IStudent from './IStudent';



interface StudentProps {
  student: IStudent;
}

export default function Student({ student }: StudentProps) {
  return (
    // <div>
      <tr>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.age}</td>
        <td>
          <button className='btn btn-primary btn-sm me-2'>View</button>
          <button className='btn btn-warning btn-sm me-2'>Edit</button>
          <button className='btn btn-danger btn-sm'>Remove</button>
        </td>
      </tr>
    // </div>
  )
}
