import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/UserRegistration/Login/Login";
import Signup from "../../Pages/UserRegistration/Signup/Signup";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import AddedProducts from "../../Pages/Dashboard/AddedProducts/AddedProducts";
import AddProducts from "../../Pages/Dashboard/AddedProducts/AddProducts";
import CustomerLists from "../../Pages/Dashboard/Customers/CustomerLists";
import AddCustomers from "../../Pages/Dashboard/Customers/AddCustomers";
import Orders from "../../Pages/Dashboard/Orders/Orders";
import Cart from "../../Pages/Cart/Cart";
import Checkout from "../../Pages/Checkout/Checkout";
import AllProducts from "../../Pages/Products/AllProducts";
import ProductDetail from "../../Pages/Products/ProductDetail";
import Products from "../../Pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/product-categories/:id",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(
            `https://healthos-assessment-server.vercel.app/product-categories/${params.id}`
          ),
      },
      {
        path: "/products/:id",
        element: <ProductDetail></ProductDetail>,
        loader: ({ params }) =>
          fetch(
            `https://healthos-assessment-server.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/admin-dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/admin-dashboard/added-products",
        element: <AddedProducts></AddedProducts>,
      },
      {
        path: "/admin-dashboard/add-products",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/admin-dashboard/customer-lists",
        element: <CustomerLists></CustomerLists>,
      },
      {
        path: "/admin-dashboard/add-customers",
        element: <AddCustomers></AddCustomers>,
      },
      {
        path: "/admin-dashboard/orders",
        element: <Orders></Orders>,
      },
    ],
  },
]);

export default router;
