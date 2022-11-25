import BikeCategory from "../pages/BikeCategory/BikeCategory";

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
            }
            
        ]
    }
])