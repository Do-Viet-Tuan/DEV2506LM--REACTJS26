import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ex01 from './componnents/Ex01';
import Ex02 from './componnents/Ex02';
import Ex03 from './componnents/Ex03';
import Ex04 from './componnents/Ex04';
import Ex05 from './componnents/Ex05';
import Ex06 from './componnents/Ex06';
import Ex07ThemeProvider, { Ex07ThemeComponent } from './componnents/Ex07';

function App() {
  return (
    <div className="container border">
      <img src="https://devmaster.edu.vn/images/logo.png" alt="Devmaster" />
      <h1>Lam viec voi React Hook</h1>
      <hr />
      <h1>Homeworks</h1>
      <Ex01 />
      <hr />
      <Ex02 />
      <hr />
      <Ex03 />
      <hr />
      <Ex04 />
      <hr />
      <Ex05 />
      <hr />
      <Ex06 />
      <hr />
      <Ex07ThemeProvider>
        <Ex07ThemeComponent />
      </Ex07ThemeProvider>
      <hr />
    </div>
  );
}

export default App;
