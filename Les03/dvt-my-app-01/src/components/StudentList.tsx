import React from 'react'
import Student from './Student'

export default function StudentList(props:any[]) {
    const elementStudent = props.students.map((student, index) => {
        return <Student student={student} key={index} />
    })
  return (
    <div>
        <table>
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
