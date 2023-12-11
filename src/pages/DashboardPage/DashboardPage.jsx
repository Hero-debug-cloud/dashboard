import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <Sidebar />
            <Header />
            <Outlet/>
        </div>
    )
}

export default Home;