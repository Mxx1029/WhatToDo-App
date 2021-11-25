import React from 'react';
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import EventPage from "./components/EventPage/EventPage";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";
import CreateListingPage from "./components/CreateListingPage/CreateListingPage.jsx";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import LoginPage from "./components/LoginPage/LoginPage";

import './App.css';

function App() {
  return (
 
      <div className="App">
           <Router>
             <Routes>
               <Route path="/" caseSensitive={false} element={<LandingPage/>} />
               <Route path="/event-page" caseSensitive={false} element={<EventPage/>} />
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
