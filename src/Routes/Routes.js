import { createBrowserRouter } from "react-router-dom";
import AddAProduct from "../InsideDashboard/AddAProduct/AddAProduct";
import AllBuyers from "../InsideDashboard/AllBuyers/AllBuyers";
import AllSellers from "../InsideDashboard/AllSellers/AllSellers";
import MyOrders from "../InsideDashboard/MyOrders/MyOrders";
import MyProducts from "../InsideDashboard/MyProducts/MyProducts";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import LaptopCollection from "../Pages/LaptopCollection/LaptopCollection";
import Login from "../Pages/Login/Login";
import NotAvailable from "../Pages/NotAvailable/NotAvailable";
import Register from "../Pages/Register/Register";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <h2>Error Page</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/laptopcollection/:brand',
                element: <PrivateRoute><LaptopCollection></LaptopCollection></PrivateRoute>,
                loader: ({ params }) => fetch(`https://usedlapi-server-side.vercel.app/laptopcollection/${params.brand}`)
            },
            {
                path: '*',
                element: <NotAvailable></NotAvailable>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        errorElement: <h2>Error Page</h2>,
        children: [
            {
                path: '/dashboard/myorders/:email',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>,
                loader: ({ params }) => fetch(`https://usedlapi-server-side.vercel.app/dashboard/myorders/${params.email}`)
            },
            {
                path: '/dashboard/allbuyers/:role',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers/:role',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/addaproduct',
                element: <SellerRoute><AddAProduct></AddAProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproducts/:email',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
        ]
    }

])

export default router;