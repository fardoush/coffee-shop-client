import Banner from "./Banner";
import Feature from "./Feature";
import About from "./About";
import Cta from "./Cta";
import Testimonial from "./Testimonial";
import InstagramGallery from "./InstagramGallery";
import Products from "./Products";

const Home = () => {
  // console.log("Loader data:", initialcoffees);
  // console.log("Is array:", Array.isArray(initialcoffees));
  // console.log(coffees);

  return (
    <div>
      <Banner />
      <About />
      <Feature />
      {/* Add Coffee Start  */}
      <Products />
      {/* End Add Coffee  */}
      <InstagramGallery />
      <Cta />
      <Testimonial />
    </div>
  );
};

export default Home;
