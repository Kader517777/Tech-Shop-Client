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
        element: <AddProduct></AddProduct>
      },
      {
        path: 'mycart',
        element: <p>sjdfnhksjhg v</p>
      },
      {
        path: 'login',
        element: <p>sjdfnhksjhg v</p>
      },
      {
        path: '/home/:brand',
        element: <BrandPage></BrandPage>
      },
      {
        path: '/home/details/:brand',
        element: <Details></Details>
      },
      {
        path: '/cart',
        element: <AddToCart></AddToCart>
      },
      {
        path: '/updated/:id',
        element: <Updated></Updated>
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
