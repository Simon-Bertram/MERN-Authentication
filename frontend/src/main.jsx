import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import App from './App.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import ErrorScreen from './screens/ErrorScreen.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route 
      path="/" 
      element={<App />} 
      errorElement={<ErrorScreen /> }>
      <Route 
        index={true} 
        path="/" 
        element={<HomeScreen />} />
      <Route 
        path="/login" 
        element={<LoginScreen />} />
      <Route
        path="/register"
        element={<RegisterScreen />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
