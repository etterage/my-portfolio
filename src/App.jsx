import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
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