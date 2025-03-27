import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful');
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <App />
      <footer>
        <div className='footer-contact'><h2>Contact Us</h2>
        <p><a href="mailto:fwstormlacrosse@outlook.com">Email us</a><br/>
        <a href='https://www.facebook.com/fortwaynestormlacrosse' target='_blank'rel='noreferrer'>Find us on Facebook</a></p>
        </div>
        <p>Copyright &copy; 2024 Storm | Fort Wayne Boys Lacrosse. All Rights Reserved.</p>
      </footer>
    </BrowserRouter>

);
