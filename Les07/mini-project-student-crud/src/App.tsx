import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Control from './components/Control';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import IStudent1 from './IStudent1';

function App() {
  // 1. Quản lý trạng thái hiển thị form
  const [isForm, setIsForm] = useState<boolean>(false);

  // 2. Quản lý danh sách sinh viên (mock data ban đầu)
  const studentsInit: IStudent1[] = [
    {
      studentId: "S001",
      studentName: "Nguyễn Văn A",
      studentAge: 20,
      gender: true,
      birthDay: new Date(2005, 5, 15), // Lưu ý: tháng bắt đầu từ 0
      address: "123 Đường Lê Lợi, Quận 1, TP.HCM",
      isActive: true
    },
    {
      studentId: "S002",
      studentName: "Trần Thị B",
      studentAge: 21,
      gender: false,
      birthDay: new Date(2004, 7, 22),
      address: "456 Đường Hoàng Hoa Thám, Hà Nội",
      isActive: false
    },
    {
      studentId: "S003",
      studentName: "Lê Minh C",
      studentAge: 22,
      gender: true,
      birthDay: new Date(2003, 11, 1),
      address: "789 Đường Trần Phú, Đà Nẵng",
      isActive: true
    }
  ];
  const [students, setStudents] = useState<IStudent1[]>(studentsInit);

  // 3. Quản lý trạng thái action hiện tại của form: 'add', 'edit', 'view'
  const [actionName, setActionName] = useState<string>("");

  // 4. Hàm xử lý khi nhấn "Thêm mới sinh viên"
  const handleAddStudent = () => {
    setIsForm(true);
    setActionName("add");
  };

  // 5. Hàm xử lý khi nhấn nút "Xem" sinh viên
  const handleViewStudent = (student:IStudent1) => {
    setIsForm(true);
    setActionName("view");
    // Cập nhật thông tin sinh viên được chọn để hiển thị trong form
    setSelectedStudent(student);
  };

  // 6. Hàm xử lý khi nhấn nút "Sửa" sinh viên
  const handleEditStudent = () => {
    setIsForm(true);
    setActionName("edit");
  };

  // 7. Hàm đóng form
  const handleCloseForm = () => {
    setIsForm(false);
  };

  // Quan ly du lieu form
  const [selectedStudent, setSelectedStudent] = useState<IStudent1 | null>(null);

  // 8. Render component
  return (
    <section className="container-fluid">
      <Header />
      <section className="container mt-4">
        <div className="row my-2">
          {/* Cột bên trái: Control + Danh sách sinh viên */}
          <div className="col-12 col-md border">
            <Control onAdd={handleAddStudent} />
            <hr />
            <StudentList
              renStudent={students}
              onViewStudent={handleViewStudent}
              onEditStudent={handleEditStudent}
            />
          </div>

          {/* Cột bên phải: Form sinh viên */}
          <div
            className="col-12 col-md-5 border ms-0 mt-2 ms-sm-2 mt-sm-0"
            style={{ display: isForm ? 'block' : 'none' }}
          >
            <StudentForm
              renderActionName={actionName}
              onClose={handleCloseForm}
              renderSelectedStudent={selectedStudent}
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
