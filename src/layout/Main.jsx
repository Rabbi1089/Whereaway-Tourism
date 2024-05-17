import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const Main = () => {
    return (
        <div className="md:max-w-[1400px] md:mx-auto border ">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;