import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import SignIn from "../components/signin/SignIn";
import SignUp from "../components/signUp/SignUp";

const Router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayouts,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('http://localhost:3000/coffee')
            },
            {
                path: '/coffee/:id',
                Component: CoffeeDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/coffee/${params.id}`)
            },
            {
                path: '/add',
                Component: AddCoffee
            },
            {
                path: '/signin',
                Component: SignIn
            },
            {
                path: '/signup',
                Component: SignUp
            },
        ]
    }
])

export default Router;