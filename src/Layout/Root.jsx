import { Outlet } from "react-router-dom";
import Header from "../components/header/header";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
