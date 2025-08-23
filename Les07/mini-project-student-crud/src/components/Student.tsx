import React from 'react';
import IStudent1 from '../IStudent1';

interface StudentProps {
  index: number;
  renStudent: IStudent1;
  // event - props
  onView: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function Student({
  index,
  renStudent,
  onView,
  onEdit,
  onDelete,
}: StudentProps) {
  return (
    <tr className="align-middle">
      <td className="text-center">{index}</td>
      <td>{renStudent.studentId}</td>
      <td>{renStudent.studentName}</td>
      <td className="text-center">{renStudent.studentAge}</td>
      <td className="text-center">{renStudent.gender === true ? 'Nam' : 'Nữ'}</td>
      <td className="text-center">
        <button id="btnView" className="btn btn-success rounded-0" onClick={onView}>
          Xem
        </button>
        <button id="btnEdit" className="btn btn-warning rounded-0" onClick={onEdit}>
          Sửa
        </button>
        <button id="btnDel" className="btn btn-danger rounded-0" onClick={onDelete}>
          Xóa
        </button>
      </td>
    </tr>
  );
}
