import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NewArrivals from "./NewArrivals";
const Root = () => {
   return (
    <>
      {/* <Navbar /> */}
      <NewArrivals />
     <Outlet />
     <Footer />
    </>
   )
}

export default Root;
