import React from 'react'
import Student from './Student'
import IStudent from './IStudent';


interface StudentListProps {
  students: IStudent[];
}

export default function StudentList({ students }: StudentListProps) {
    const elementStudent = students.map((student, index) => {
        return <Student student={student} key={index} />
    })
  return (
    <div>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {elementStudent}
            </tbody>
        </table>
    </div>
  )
}
