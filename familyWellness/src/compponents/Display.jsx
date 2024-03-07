import Navbar from "./navbar/Navbar";
import Banner from "./banner/Banner";
import About from "./about/About";
import Footer from "./footer/Footer";
function Display(){
    return(
        <>
        <div className="container" >
            <Navbar/>
            <Banner/>
            <About/>
            <Footer/>
        </div>
            
        </>
    );
}
export default Display;

