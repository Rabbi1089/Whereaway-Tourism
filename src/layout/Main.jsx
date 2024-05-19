import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../pages/Footer";


const Main = () => {
    return (
        <div className="md:max-w-[1400px] md:mx-auto border ">
            <Header></Header>
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;