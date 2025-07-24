import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from './App.jsx'
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';
import { AuthProvider } from './context/authcontext.jsx';

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AuthProvider>
  <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
