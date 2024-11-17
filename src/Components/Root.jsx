import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* outline here */}
      <div className="min-h-[calc(100vh-288px)]">
        <Outlet></Outlet>
      </div>
      {/* footer here */}
      <Footer></Footer>
    </div>
  );
};

export default Root;
