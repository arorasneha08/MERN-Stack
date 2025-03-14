// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { Toaster } from 'react-hot-toast'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     <div><Toaster/></div>
//   </StrictMode>,
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import './index.css';
import { Toaster } from 'react-hot-toast';

const appRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
    <Toaster position="top-center" reverseOrder={false} />
  </StrictMode>
);
