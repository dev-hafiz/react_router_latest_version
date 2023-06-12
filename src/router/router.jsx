import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/home";
import Foods from "../components/foods/foods";
import About from "../components/about/about";
import Root from "../Layout/Root";
import Contact from "../components/contact/contact";
import Help from "../components/help/help";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "home", element: <Home /> },
      {
        path: "foods",
        loader: async () => {
          return fetch(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
          );
        },
        element: <Foods />,
      },
      { path: "about", element: <About /> },
      { path: "help", element: <Help /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
