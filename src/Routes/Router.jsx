import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";

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
                Component: AddCoffee
            },
            {
                path: '/add',
                Component: AddCoffee
            },
        ]
    }
])

export default Router;