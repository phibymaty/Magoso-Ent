import Nav from "../components/Nav";
import Slider from "../components/Slider";
import Features from "../components/Features";
import Categories from "../components/Categories";
import About from "../pages/About";
import Contact from "../pages/Contact";
const Home = () => {
  return (
    <div>
      <Nav />
      <Slider />
      <Features />
      <Categories />
      <About />
      <Contact />
    </div>
  );
};
export default Home;
