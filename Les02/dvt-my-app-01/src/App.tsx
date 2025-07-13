import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JsxExpression from './components/JsxExpression';
import FuncComp from './components/FuncComp';
import FuncComp1 from './components/FuncComp1';
import Func_Hvt_1 from './components/Func_Hvt_1';
import Func_Hvt_2 from './components/Func_Hvt_2';
import Func_Hvt_3 from './components/Func_Hvt_3';

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
    </div>
  );
}


export default App;
