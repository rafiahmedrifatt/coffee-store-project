import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import App from "../App";

const Router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayouts,
        children: [
            {
                index: true,
                Component: App
            }
        ]
    }
])

export default Router;