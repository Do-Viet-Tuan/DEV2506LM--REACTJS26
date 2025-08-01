import React from 'react'
import Student from './Student'

export default function StudentList() {
    return (
        <div>
            <div className="list">
                <h3>Danh sách sinh viên</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mã sinh viên</th>
                            <th>Họ và tên</th>
                            <th>Tuổi</th>
                            <th>Giới tính</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Student />
                    </tbody>
                </table>
            </div>
        </div>
    )
}
