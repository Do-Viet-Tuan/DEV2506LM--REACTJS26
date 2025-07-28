import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Control from './component/Control';
import StudentList from './component/StudentList';
import StudentForm from './component/StudentForm';
import StudentList1 from './component/StudentList1';

function App() {

  interface Student1 {
    id: number;
    msv: number;
    name: string;
    age: number;
    gioiTinh: string;
  }
  // Muc data
  const students: Student1[] = [
    { id: 1, msv: 101, name: 'Nguyen Thanh Tung', age: 31, gioiTinh: 'Nam' },
    { id: 2, msv: 102, name: 'Nguyen Tung Thanh', age: 22, gioiTinh: 'Nam' },
    { id: 3, msv: 103, name: 'Thanh Tung Nguyen', age: 21, gioiTinh: 'Nam' },
    { id: 4, msv: 104, name: 'Le Thi Hoa', age: 23, gioiTinh: 'Nu' },
    { id: 5, msv: 105, name: 'Pham Van Minh', age: 24, gioiTinh: 'Nam' },
    { id: 6, msv: 106, name: 'Nguyen Thi Bich', age: 22, gioiTinh: 'Nu' },
    { id: 7, msv: 107, name: 'Tran Van Khoa', age: 25, gioiTinh: 'Nam' },
    { id: 8, msv: 108, name: 'Doan Minh Chau', age: 20, gioiTinh: 'Nu' },
    { id: 9, msv: 109, name: 'Hoang Gia Huy', age: 21, gioiTinh: 'Nam' },
    { id: 10, msv: 110, name: 'Nguyen Van Nam', age: 23, gioiTinh: 'Nam' },
  ];

  return (
    <section className='container-fluid'>
      <Header />
      <section className='container mt-4'>
        <div className='row my-2'>
          <div className='col-12 col-md border'>
            <Control />
            <hr />
            <StudentList />
            <StudentList1 students={students} />
          </div>
          <div className='col-md-5 col-12 border ms-0 mt-2 ms-sm-2 mt-sm-0' id='frmForm'>
            <StudentForm />
          </div>
        </div>
      </section>
      <hr />

    </section>

  );
}

export default App;
