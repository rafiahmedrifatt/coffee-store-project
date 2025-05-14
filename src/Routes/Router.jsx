import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import App from "../App";
import AddCoffee from "../components/AddCoffee";

const Router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayouts,
        children: [
            {
                index: true,
                Component: App
            },
            {
                path: '/add',
                Component: AddCoffee
            }
        ]
    }
])

export default Router;