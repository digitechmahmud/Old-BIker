import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardLayouts from "../Layouts/DashboardLayout";
import BikeCategory from "../pages/BikeCategory/BikeCategory";
import Blogs from "../pages/Blogs/Blogs";
import BookingModal from "../pages/BookingModal/BookingModal";
import Buyers from "../pages/Buyers/Buyers";
import Login from "../pages/Login/Login";
import MyOrders from "../pages/MyOrders/MyOrders";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");
const { default: Home } = require("../pages/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                element: <BikeCategory></BikeCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
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
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
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
                element: <Buyers></Buyers>,
                // loader: ({ params }) => fetch(`http://localhost:5007/users/${params.id}`)
            }
        ]
    
    }
])