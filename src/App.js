import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import PageNotFound from './pages/pagenotfound';
import Registration from './pages/registration';
import Schedule from './pages/schedule';
import Equipment from './pages/equipment';
import AreaTeams from './pages/area-teams';

function App() {
  return (

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/equipment' element={<Equipment />} />
        <Route path='/area-teams' element={<AreaTeams />} />

        <Route path="*" element={<PageNotFound />} />
        </Routes>

  )
}
;

export default App;

