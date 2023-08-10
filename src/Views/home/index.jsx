import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Hero from "./hero";
import About from "./about";
import CallToAction from "./callToAction";
import Service from "./service";
import Testiomonial from "./testimonials";
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <CallToAction />
      <Service /> 
      <Testiomonial /> 
      <Footer />
    </>
  );
}

export default Home;