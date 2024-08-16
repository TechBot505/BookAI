import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Roadmap from "./components/Roadmap";
import Samples from "./components/Samples";
import Testimonials from "./components/Testimonials";
import Video from "./components/Video";
import Working from "./components/Working";

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <Working />
    <Samples />
    <Video />
    <Roadmap />
    <Testimonials />
    <Newsletter />
    <Footer />
    </>
  );
};

export default App;
