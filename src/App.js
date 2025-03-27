import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import PageNotFound from './pages/pagenotfound';
import Registration from './pages/registration';
import Schedule from './pages/schedule';
import Equipment from './pages/equipment';
import AreaTeams from './pages/area-teams';
import Contact from './pages/contact';
import SEO from './components/seo';

function App() {
  return (
    <>
      <SEO />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/equipment' element={<Equipment />} />
        <Route path='/area-teams' element={<AreaTeams />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <footer>
        <div className='footer-contact'><h2>Contact Us</h2>
        <p><a href="mailto:fwstormlacrosse@outlook.com">Email us</a><br/>
        <a href='https://www.facebook.com/fortwaynestormlacrosse' target='_blank'rel='noreferrer'>Find us on Facebook</a></p>
        </div>
        <p>Copyright &copy; 2024 Storm | Fort Wayne Boys Lacrosse. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;

