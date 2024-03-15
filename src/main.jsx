import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './css/main.css'
import './css/responsive.css'

import ErrorPage from './pages/404.jsx'
// import Blog from './pages/Blog.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  // {
  //   path: "/blog",
  //   element: <Blog />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
