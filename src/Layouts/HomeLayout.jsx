import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavber from "../Components/Layout-component/LeftNavber";
import RightNavber from "../Components/Layout-component/RightNavber";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";


const HomeLayout = () => {
    return (
        <div>
            {/* header */}
            <header>
                <Header></Header>

                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            {/* navber */}
            <nav className="w-11/12  mx-auto py-2">
                <Navbar></Navbar>
            </nav>
            {/* main */}
            <main className="w-11/12 mx-auto pt-5 md:grid grid-cols-12">
                <aside className="col-span-3">
                    <LeftNavber></LeftNavber>
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <RightNavber></RightNavber>
                </aside>

            </main>
        </div>
    );
};

export default HomeLayout;