import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
// import MainLayOut from "../Layout/Mainlayout";


const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;