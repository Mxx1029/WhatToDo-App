import React from 'react';
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Event from "./components/EventPage/Event";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import LoginPage from "./components/LoginPage/LoginPage";
import CreateListingPage from "./components/CreateListingPage/CreateListingPage";

import './App.css';

function App() {
  return (
 
      <div className="App">
           <Router>
             <Routes>
               <Route path="/" caseSensitive={false} element={<LandingPage/>} />
               <Route path="/event/:id" caseSensitive={false} element={<Event />} />
               <Route path="*" caseSensitive={false} element={<PageNotFound/>} />
               <Route path="/register" caseSensitive={false} element={<RegistrationPage/>} />
               <Route path="/login" caseSensitive={false} element={<LoginPage/>} />
               <Route path="/create-listing" caseSensitive={false} element={<CreateListingPage/>} />
             </Routes>
           </Router>    
    </div>
  );
}

export default App;
