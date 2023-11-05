import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Solutions from './Solutions';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
function Pages() {
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
    </Routes>
  )
}

export default Pages
