import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <App />
      <footer>
        Copyright &copy; 2024 Storm | Fort Wayne Boys Lacrosse. All Rights Reserved.
      </footer>
    </BrowserRouter>

);
