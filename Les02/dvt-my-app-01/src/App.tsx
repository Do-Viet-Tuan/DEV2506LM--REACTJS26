import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JsxExpression from './components/JsxExpression';
import FuncComp from './components/FuncComp';
import FuncComp1 from './components/FuncComp1';

function App() {
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
    </div>
  );
}

export default App;
