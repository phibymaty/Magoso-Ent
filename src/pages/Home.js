import Nav from "../components/Nav";
import Slider from "../components/Slider";
import Features from "../components/Features";
import Categories from "../components/Categories";
import About from "../pages/About";
import Contact from "../pages/Contact";
import BestSellers from "../components/BestSellers";
import NewsLetter from "../components/NewsLetter";
import Footer from "./Footer";
import NavProduct from "./NavProduct";
import { Pages } from "@mui/icons-material";
import LogIn from "./LogIn";
import AddProduct from "../pages/AddProduct";
const Home = () => {
  return (
    <div>
      {/* <Nav />
      <Slider />
      <Features />
      <Categories />
      <BestSellers/>
      <NewsLetter/>
      <Footer/>
      <NavProduct/> */}
      {/* <LogIn/> */}
      <AddProduct/>
      
    </div>
  );
};
export default Home;
