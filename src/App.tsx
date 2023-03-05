import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CustomerForm} from "./CustomerForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <CustomerForm/>
    </div>
  );
}

export default App;
