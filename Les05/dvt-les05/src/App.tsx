import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateDemo from './components/UseStateDemo';
import UseEffectDemo from './components/UseEffectDemo';
import ExampleContext from './components/ExampleContext';

function App() {
  return (
    <div className="container border">
      <img src="https://devmaster.edu.vn/images/logo.png" alt="Devmaster" />
      <h1>Lam viec voi React Hook</h1>
      <hr />
      <UseStateDemo />
      <hr />
      <UseEffectDemo />
      <hr />
      <ExampleContext />
    </div>
  );
}

export default App;
