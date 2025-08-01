import React from "react";
import Student from "./Student";
import IStudent1 from "../IStudent1";

interface StudentListProps {
  renStudent: IStudent1[];
  onViewStudent: (student: IStudent1) => void;
  onEditStudent?: (student: IStudent1) => void;
  onDeleteStudent?: (student: IStudent1) => void;
}

export default function StudentList({ renStudent, onViewStudent, onEditStudent, onDeleteStudent }: StudentListProps) {
  let studentElements = renStudent.map((student, index) => {
    return (
      <Student
        key={student.studentId}
        index={index + 1}
        renStudent={student}
        onView={() => onViewStudent(student)}
        // onEdit={() => onEditStudent(student)}
      />
    );
  });

  return (
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
        <tbody>{studentElements}</tbody>
      </table>
    </div>
  );
}
