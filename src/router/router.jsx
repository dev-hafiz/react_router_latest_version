import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/home";
import Foods from "../components/foods/foods";
import About from "../components/about/about";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "foods", element: <Foods /> },
      { path: "about", element: <About /> },
    ],
  },
]);
