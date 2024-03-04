import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './css/main.css'
import './css/responsive.css'

import ErrorPage from './pages/404.tsx'
import Blog from './pages/Blog.tsx'

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
  {
    path: "/blog",
    element: <Blog />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
