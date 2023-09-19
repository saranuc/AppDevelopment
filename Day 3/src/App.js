import React from 'react';
import Login from './login';
import Signup from './signup';
import Home from './home';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="up" element ={<Signup/>}/>
        <Route path="home" element ={<Home/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
