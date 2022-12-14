import DashboardLayout from "../Layouts/DashboardLayout";
import AddProduct from "../pages/AddProduct/AddProduct";
import BikeCategory from "../pages/BikeCategory/BikeCategory";
import Blogs from "../pages/Blogs/Blogs";
import BookingModal from "../pages/BookingModal/BookingModal";
import Buyers from "../pages/Buyers/Buyers";
import Login from "../pages/Login/Login";
import MyOrders from "../pages/MyOrders/MyOrders";
import MyProducts from "../pages/MyProducts/MyProducts";
import Sellers from "../pages/Sellers/Sellers";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";
import ErrorMessage from '../pages/ErrorMessage/ErrorMessage';

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");
const { default: Home } = require("../pages/Home/Home");


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorMessage></ErrorMessage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/home',
                element:<Home></Home>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><BikeCategory></BikeCategory></PrivateRoute>,
                loader: ({ params }) => fetch(`https://old-biker-server.vercel.app/categories/${params.id}`)
            },
            {
                path: '/Login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/bookingmodal',
                element: <BookingModal></BookingModal>,
                loader: ({ params }) => fetch(`https://old-biker-server.vercel.app/categories/${params.id}`)
            },

            
            
        ]
    },
    {
    
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element:<MyOrders></MyOrders>
            },
            {
                path: '/dashboard/buyers',
                element: <AdminRoute><Buyers></Buyers></AdminRoute>,
            },
            {
                path: '/dashboard/sellers',
                element: <AdminRoute><Sellers></Sellers></AdminRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            }
        ]
    
    }
])