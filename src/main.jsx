import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Trending, New, Update, MyBlogs } from "./pages/Export.js"
import './index.css'
import Modify from './components/Modify.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/home",
    Component: Home
  },
  {
    path: "/trending",
    Component: Trending
  },
  {
    path: "/new",
    Component: Modify
  },
  {
    path: "/edit/:id",
    Component: Modify
  },
  {
    path: "/my-blogs",
    Component: MyBlogs
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
