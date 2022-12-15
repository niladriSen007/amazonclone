import React from 'react'
import Footer from './components/Footer/Footer'
import MainComponent from './components/Home/MainComponent'
import Navbar from './components/Navbar/Navbar'
import ProductList from './components/ProductList/ProductList'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Product from './components/Product/Product'
import Cart from './components/Cart/Cart'



const App = () => {


  const ProtectedRoute = ({ children }) => {
    if (false) {
      return <Navigate to="/signin" />;
    }

    return children;
  };

  const Layout = () =>(
    <div>
          <Navbar />
         <ProductList />
         <Outlet />
         <Footer />
    </div>
  )

  const router = createBrowserRouter([
    {
      path: "/",
      element:( 
      <ProtectedRoute>
        <Layout /> ,
      </ProtectedRoute>),
      children:[
        {
          path:"/",
          element:<MainComponent />
        },
        {
          path:"/signin",
          element:<SignIn />
        },
        {
          path:"/signup",
          element:<SignUp />
        },
        {
          path:"/products/:id",
          element:<Product />
        },
        {
          path:"/cart",
          element:<Cart />
        }
      ]
    },
  ]);

  return(
    <RouterProvider router={router} />
  )
  
}

export default App