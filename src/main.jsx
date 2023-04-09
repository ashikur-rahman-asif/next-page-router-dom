import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Books from './assets/components/Books'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: 'books',
        element: <Books></Books>,
        loader: ()=>fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: 'about',
        element:<About></About>,
      }
    ]
  },
  {
    path: '/about',
    element:<p>About page</p>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
  
);
