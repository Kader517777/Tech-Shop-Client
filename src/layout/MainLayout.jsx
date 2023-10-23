import { Outlet } from "react-router-dom";
import Navber from "../component/Navber";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <div><Toaster /></div>

        </div>
    );
};

export default MainLayout;