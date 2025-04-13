import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import About from './component/About/about';
import Contact from './component/Contact/contact';
import Formvalidation from './component/Formvalidation/form';
import Home from './component/Home/home';
import Layout from './component/Layout';
import Login from './component/Login/login';
import ProtectedRoute from "./component/ProtectedRoute.jsx";



import './index.css';
import Signup from './Signup/signup.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup/>} />
      <Route
        path='form'
        element={
          <ProtectedRoute>
            <Formvalidation />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
