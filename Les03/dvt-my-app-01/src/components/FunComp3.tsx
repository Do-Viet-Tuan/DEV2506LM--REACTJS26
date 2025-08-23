import React from 'react'

interface Student {
  name: string;
  age: number;
  email: string;
  address?: string; // Optional property
}
interface FunComp3Props {
  student: Student;
}
export default function FunComp3(props: FunComp3Props) {
  return (
    <div>
      <div className='alert alert-danger'>
        <h2>Hello:
          <br />
          Name: {props.student.name}
          <br /> Age: {props.student.age}
          <br /> Email: {props.student.email}
          <br /> Address: {props.student.address}
        </h2>
      </div>

    </div>
  )
}
