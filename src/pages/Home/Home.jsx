import Baner from "../../component/Baner";
import Brands from "../../component/Brands";
import Footer from "../../component/Footer";
import LetestMonitor from "../../component/LetestMonitor";
import LetestProduct from "../../component/LetestProduct";

const Home = () => {
    return (
        <div >
            <div className=" container mx-auto">
                <Baner></Baner>
                <Brands></Brands>
                <LetestProduct></LetestProduct>
                <LetestMonitor></LetestMonitor>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;