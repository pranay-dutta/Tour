import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Trending, MyBlogs, Contact, NewPost, Modify, About } from "./pages/Export.js"
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
    path: "/trending",
    Component: Trending
  },
  {
    path: "/new",
    Component: NewPost
  },
  {
    path: "/edit/:id",
    Component: Modify
  },
  {
    path: "/my-blogs",
    Component: MyBlogs
  },
  { path: "/about", Component: About }, { path: "/contact", Component: Contact },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
