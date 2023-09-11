import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Content from './component/Content';
import Login from './component/Login';
import List from './component/List';
import Footer from './component/Footer';
import Header from './component/Header';
import Signup from './component/Signup';
import DetailSeat from './component/DetailSeat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path='/' element={<Content />} />
      <Route path='/login' element={<Login />} />
      <Route path='/list/:idSchedule' element={<List />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/detail/:listId' element={<DetailSeat />} />

    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
