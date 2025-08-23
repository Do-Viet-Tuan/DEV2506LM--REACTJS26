import React, { Component } from 'react';
import './App.css';
import IPersonnel from './components/IPersonnel';
import FunListPersonnel from './components/FunListPersonnel';
import EventClass1 from './components/EventClass1';
import EvenForm1 from './components/EvenForm1';
import EvenForm2 from './components/EvenForm2';
import EvenForm3 from './components/EvenForm3';

const personnel: IPersonnel[] = [
  { id: 1, name: 'Nguyễn Văn A', age: 20 },
  { id: 2, name: 'Trần Thị B', age: 19 },
  { id: 3, name: 'Lê Văn C' }, // không có age
  { id: 4, name: 'Phạm Thị D', age: 21 },
  { id: 5, name: 'Hoàng Văn E' }, // không có age
];

type AppProps = {};
type AppState = {};

  //handle submit event from EventForm2
  const handleSubmit = (data: IPersonnel) => {
    personnel.push(data);
    console.log("personnel:", personnel);
  }



class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div className="container border">
        <div>
          <img src="https://devmaster.edu.vn/images/logo.png" alt="Devmaster" />
          <h1 className='text-center'>Personnel List</h1>
          <FunListPersonnel personnels={personnel} />
          <hr />
          <EventClass1 />
          <hr />
          <h3>Form Component Event</h3>
          <EvenForm1 />
          <hr />
          <h3>Form Class Component with ID</h3>
          <EvenForm2 onSubmit={handleSubmit} />
          <hr />
          <h3>Form Function Component</h3>
          <EvenForm3 />
          <hr />
        </div>
      </div>
    );
  }
}

export default App;
