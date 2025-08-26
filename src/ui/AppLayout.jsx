import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import UpArrow from "../components/UpArrow";

function AppLayout() {
  return (
    <div className="relative grid grid-rows-[auto_1fr_auto]">
      <header className="">
        {/* <div>Header + Navbar</div> */}
        <Navbar />
      </header>
      <main className="h-screen">
        <Outlet />
     </main>
      <footer className="bg-[#262A37] ">
        <Footer />
     </footer>
     <UpArrow />
    </div>
  );
}

export default AppLayout;
