import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import NavBar from './NavBar';
import ContactUs from './ContactUs';
import AboutThisSite from './AboutThisSite';
import LoginPage from './LoginPage';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (navigate, from) => {
    setIsLoggedIn(true);
    navigate(from, { replace: true });
  };

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />

        <Route path="/login" element={<LoginPage onClick={handleLogin} />} />

        <Route
          path="/about"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <AboutThisSite />
            </PrivateRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <ContactUs />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;