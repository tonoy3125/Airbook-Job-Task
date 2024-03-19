import { Outlet } from "react-router-dom";

import Footer from "../../Pages/Shared/Footer/Footer";


const Root = () => {
    return (
        <div className="bg-gray-100">
            
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;