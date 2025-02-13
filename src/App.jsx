import React from 'react';
import TicketForm from './pages/TicketForm';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AttendanceDetails from './pages/AttendanceDetails';
import TicketPage from './pages/TicketPage';
import About from './pages/About';
import MyTickets from './pages/MyTickets';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<TicketForm />} />
          <Route path='/details' element={<AttendanceDetails />} />
          <Route path='/ticket' element={<TicketPage />} />
          <Route path='/my-tickets' element={<MyTickets />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;