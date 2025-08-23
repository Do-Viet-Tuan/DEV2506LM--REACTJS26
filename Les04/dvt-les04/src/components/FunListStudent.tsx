import React from 'react'
import IStudent from './IStudent';

type FunListStudentProps = {
    students: IStudent[];
}

export default function FunListStudent({ students }: FunListStudentProps) {
    return (
        <div>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => {

                        return (
                            <tr key={index}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age !== undefined ? student.age : ''}</td>

                                <td>
                                    <button className='btn btn-primary btn-sm me-2'>View</button>
                                    <button className='btn btn-danger btn-sm me-2'>Delete</button>
                                    <button className='btn btn-warning btn-sm me-2'>Edit</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
