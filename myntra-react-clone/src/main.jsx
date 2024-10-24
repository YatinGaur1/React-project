import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,createBrowserRouter}from 'react-router-dom'
import Bag from './routes/Bag.jsx'
import App from './routes/App.jsx'
import Home from './routes/Home.jsx'
import {Provider}from "react-redux";
import myntrastore from './store/index.js'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"


const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home/> /*,loader:PostLoader*/},
      { path: "/bag", element: <Bag/> /*,action:CreatepostAction */},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntrastore}>
    <RouterProvider router={route}/>
    </Provider>
  </StrictMode>,
)
