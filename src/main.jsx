import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, New, Update, Blog } from "./pages/Export.js"
import './index.css'

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
    path: "/new",
    Component: New
  },
  {
    path: "/update/:id",
    Component: Update
  },
  {
    path: "/blog",
    Component: Blog
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
