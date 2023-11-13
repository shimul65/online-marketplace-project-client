import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import useAOSInit from "../../Hook/useAOSInit";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";


const Root = () => {
    useAOSInit();
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto">
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollToTop></ScrollToTop>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;