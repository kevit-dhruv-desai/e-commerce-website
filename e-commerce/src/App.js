import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Component/Pages/PageComponet/Login";
import SignUp from "./Component/Pages/PageComponet/SignUp";
import ProductList from "./Component/Pages/PageComponet/ProductList";
import store from './Store/Store'
import {Provider} from 'react-redux'
import ProductDetails from "./Component/Pages/PageComponet/productDetails";


function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Login/> },
    { path: "signup", element: <SignUp /> },
    { path: "ProductList", element: <ProductList/> },
    { path: "productdetails/:id", element: <ProductDetails/> },
  ]);
  return <Provider store={store}> <RouterProvider router={router} /></Provider>;
}

export default App;