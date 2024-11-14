import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";


const MainLayout = () => {

    return (
        <div>
            
            {/* Outlet */}
            <div className="min-h-screen">
                <Outlet />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
