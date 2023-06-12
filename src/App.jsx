import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/router";
import "./global.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
