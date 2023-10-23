import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import AddProduct from './pages/AddProduct/AddProduct';
import Home from './pages/Home/Home';
import BrandPage from './pages/BrandPage/BrandPage';
import Details from './pages/Details/Details';
import AddToCart from './pages/AddToCart/AddToCart';
import Updated from './pages/Updated/Updated';
import AuthContext from './Provider/AuthContext';
import Login from './pages/Login/Login';
import Resigtration from './pages/Resigtration/Resigtration';
import PrivateRoute from './Route/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'addproduct',
        element: <PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'resigtration',
        element: <Resigtration></Resigtration>
      },
      {
        path: '/home/:brand',
        element: <BrandPage></BrandPage>
      },
      {
        path: '/home/details/:brand',
        element: <PrivateRoute>
          <Details></Details>
        </PrivateRoute>
      },
      {
        path: '/cart',
        element: <PrivateRoute>
          <AddToCart></AddToCart>
        </PrivateRoute>
      },
      {
        path: '/updated/:id',
        element: <PrivateRoute>
          <Updated></Updated>
        </PrivateRoute>
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>
);
