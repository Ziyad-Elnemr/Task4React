import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsProvider } from "../context/ProductsContext.jsx";
import Navbar from "../component/Navbar.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Products from "../pages/Products.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import AddProducts from "../component/Addproducts.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import NotFound from "../pages/NotFound.jsx";
import Layout from "../pages/Layout.jsx";

function App() {
  let routingConfig = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "Products", element: <Products /> },
        { path: "product/:id", element: <ProductDetails /> },
        { path: "AddProducts", element: <AddProducts /> },
        { path: "Login", element: <Login /> },
        { path: "Signup", element: <Signup /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <ProductsProvider>
      <RouterProvider router={routingConfig}></RouterProvider>
    </ProductsProvider>
  );
}

export default App;
