import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Navbar"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />
    },
    {
        path: "/about",
        element: <div>About Me</div>
    },
    {
        path: "/projects",
        element: <div>Personal Projects</div>
    },
    {
        path: "/contact",
        element: <div>Contact</div>
    }
]);

const App = () => {
    return <RouterProvider router={router} />
}

export default App