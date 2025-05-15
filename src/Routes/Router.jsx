import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import App from "../App";
import AddCoffee from "../components/AddCoffee";
import Home from "../pages/Home";

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
                path: '/add',
                Component: AddCoffee
            },
            {
                path: '/add',
                Component: AddCoffee
            }
        ]
    }
])

export default Router;