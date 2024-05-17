import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main.jsx'
import SignUp from './pages/SignUp.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import SignIn from './pages/SignIn.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main />,
    children : [
      
        {
          path:'/signUp',
          element : <SignUp />
        },
        {
          path:'/SignIn',
          element : <SignIn />
        }
      
    ]
  }


])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);