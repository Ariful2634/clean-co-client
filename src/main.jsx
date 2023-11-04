import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import AuthProvider from './Provider/AuthProvider';
import BookNow from './Pages/Services/BookNow';
import Booking from './Booking/Booking';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/bookNow/:id',
        element:<PrivateRoute><BookNow></BookNow></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/services')
        
      },
      {
        path:'/booking',
        element:<PrivateRoute><Booking></Booking></PrivateRoute>
      }
    ]
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/register',
    element:<Register></Register>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
