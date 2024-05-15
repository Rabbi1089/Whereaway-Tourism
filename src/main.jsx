import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main.jsx'
import SignUp from './pages/SignUp.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main />,
    children : [
      
        {
          path:'/signUp',
          element : <SignUp />
        }
      
    ]
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
