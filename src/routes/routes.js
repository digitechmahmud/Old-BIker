import DashboardLayouts from "../Layouts/DashboardLayout";
import BikeCategory from "../pages/BikeCategory/BikeCategory";
import DashBoard from "../pages/DashBoard/DashBoard";
import Login from "../pages/Login/Login";
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
            
            
        ]
    },
    {
    
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayouts></DashboardLayouts></PrivateRoute>,
        children: [
            
        ]
    
    }
])