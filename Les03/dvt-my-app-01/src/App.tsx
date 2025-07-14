import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JsxExpression from './components/JsxExpression';
import FuncComp from './components/FuncComp';
import FuncComp1 from './components/FuncComp1';
import Func_Hvt_1 from './components/Func_Hvt_1';
import Func_Hvt_2 from './components/Func_Hvt_2';
import Func_Hvt_3 from './components/Func_Hvt_3';
import FuncComp2 from './components/FuncComp2';
import ClassComp from './components/ClassComp';
import ClassComp1 from './components/ClassComp1';
import ClassComp2 from './components/ClassComp2';
import FunComp3 from './components/FunComp3';
import FunListMenber from './components/FunListMenber';
import ClassMember from './components/ClassMember';
import StudentList from './components/StudentList';

function App() {
  //
  const objStudent = {
    name: 'Nguyen Thanh Tung',
    age: 31,
    email: "mtpentertainment@gmail.com"
  };
  // Dinh nghia kieu cho props cua component Student
  // Lop giao dien doi tuong sinh vien
  interface Student {
    id: number;
    name: string;
    age: number;
  }
  //Muc data
  const students: Student[] = [
    { id: 1, name: 'Nguyen Van A', age: 20 },
    { id: 2, name: 'Tran Thi B', age: 22 },
    { id: 3, name: 'Le Van C', age: 21 }
  ];
  return (
    <div className="container h-100">
      <div>
        <img src="https://devmaster.edu.vn/images/logo.png" alt="Devmaster Academy" />
        <h1>Welcome to Devmaster Academy</h1>
      </div>
      <div className='text-center alert alert-info'>
        <h1>VIEN CONG NGHE VA DAO TAO DEVMASTER</h1>
      </div>
      <hr />
      <JsxExpression />
      <hr />
      <h2 className='alert alert-success'>Component</h2>
      <FuncComp />
      <FuncComp name="Tuann" age={22} compony="Devmaster" />
      <hr />
      <FuncComp1 name="Tuann" compony="Devmaster" age={22} />
      <hr />
      <hr />
      <hr />
      <h2 className='alert alert-success'>Homeworks</h2>
      <Func_Hvt_1 />
      <hr />
      <Func_Hvt_2 />
      <Func_Hvt_2 name="Thanh Tung" />
      <Func_Hvt_2 name="Thanh Tung" compony="MTP_Entertainment" />
      <Func_Hvt_2 name="Thanh Tung" compony="MTP_Entertainment" age={31} />
      <Func_Hvt_2 name="Thanh Tung" age={31} />
      <hr />
      <Func_Hvt_3 name="Thanh Tung" age={31} compony="MTP_Entertainment" />
      <Func_Hvt_3 name="Thanh Tung" compony="MTP_Entertainment" />
      <Func_Hvt_3 name="Thanh Tung" age={31} />
      <Func_Hvt_3 name="Thanh Tung" />

      <hr />
      <FuncComp2 />
      <FuncComp2 fullName="Nguyen Thanh Tung" age={31} email="mtpentertainment@gmail.com" address="123 Nguyen Trai" />
      <hr />
      <FunComp3 student={objStudent} />
      <hr />
      <hr />
      <ClassComp studentName="Nguyen Thanh Tung" />
      <ClassComp1 name="Son Tung" age={31} />

      <ClassComp2 student={objStudent} />

      <hr />
      <hr />
      <FunListMenber />
      <hr />
      <ClassMember />
      <hr />
      <StudentList students={students} />
    </div>
  );
}


export default App;
