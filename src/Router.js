import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import RouteWithNavFooter from './RouteWithNavFooter';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<RouteWithNavFooter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
