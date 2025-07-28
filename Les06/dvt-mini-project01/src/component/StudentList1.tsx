import React from 'react'
import IStudent from './IStudent';
import Student1 from './Student1';


interface StudentListProps {
    students: IStudent[];
}

export default function StudentList({ students }: StudentListProps) {
    const elementStudent = students.map((student, index) => {
        return <Student1 student={student} key={index} />
    })
    return (
        <div>
            <table className='table table-bordered'>
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Mã sinh viên</th>
                        <th>Họ và tên</th>
                        <th>Tuổi</th>
                        <th>Giới tính</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {elementStudent}
                </tbody>
            </table>
        </div>
    )
}
