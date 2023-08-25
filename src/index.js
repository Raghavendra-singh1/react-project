
import React from 'react';
import ReactDOM from 'react-dom';
// import Navbar from "./components/Navbar";
import About from './routes/About';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Service from './routes/Service';
import Login from './routes/Login';
import Signup from './routes/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Service/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
     </Routes> 
  {/* <Navbar/> */}
  </BrowserRouter>
  ,
  document.getElementById('root')
);