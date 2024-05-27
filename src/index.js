import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Inicio from './Inicio/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Inicio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
