import React from 'react';
import './App.css';
import IStudent from './components/IStudent';
import FunListStudent from './components/FunListStudent';
import EventFuct1 from './components/EventFuct1';
import EventClass1 from './components/EventClass1';
import EventForm1 from './components/EventForm1';
import EventForm2 from './components/EventForm2';
import { log } from 'console';
import EventForm3 from './components/EventForm3';

function App() {

  const students: IStudent[] = [
    { id: 1, name: 'Nguyễn Văn A', age: 20 },
    { id: 2, name: 'Trần Thị B', age: 19 },
    { id: 3, name: 'Lê Văn C' }, // không có age
    { id: 4, name: 'Phạm Thị D', age: 21 },
    { id: 5, name: 'Hoàng Văn E' }, // không có age
  ];

  //handle submit event from EventForm2
  const handleSubmit = (data:IStudent) => {
    students.push(data);
    console.log("students:", students);
  }


  return (
    <div className="container border">
      <div>
        <img src="https://devmaster.edu.vn/images/logo.png" alt="Devmaster" />
      </div>
      <h1 className='text-center'>Danh sách sinh viên</h1>
      <FunListStudent students={students} />
      <h2>Event</h2>
      <EventFuct1 />
      <hr />
      <h2>Class Component</h2>
      <EventClass1 />
      <hr />
      <h2>Form</h2>
      <h3>Form Class Component</h3>
      <EventForm1 />
      <hr />
      <h3>Form Class Component with ID</h3>
      <EventForm2 onSubmit = {handleSubmit} />
      <hr />
      <h3>Form Function Component</h3>
      <EventForm3 />
    </div>
  );
}

export default App;
