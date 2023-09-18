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
import ReturnPage from './component/ReturnPage';
import Vnpay from './component/Vnpay';
import HeaderHoa from './component/HeaderHoa';
import Ticket from './component/Ticket';
import TicketReturn from './component/TicketReturn';
import ForgotCode from './component/ForgotCode';
import History from './component/History';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header />  
  {/* <HeaderHoa /> */}
    <Routes>
      <Route path='/' element={<Content />} />
      <Route path='/login' element={<Login />} />
      <Route path='/list/:idSchedule' element={<List />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/detail/:listId' element={<DetailSeat />} />
      <Route path='/return' element={<ReturnPage />} />
      <Route path='/ticket' element={<Ticket />} />
      <Route path='/ticketReturn' element={<TicketReturn />} />
      <Route path='/forgotCode' element={<ForgotCode />} />
      <Route path='/history' element={<History />} />
      
    </Routes>
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
