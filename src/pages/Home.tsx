import Explore from "../components/Explore/Explore";
import FAQ from "../components/FAQ/FAQ";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <FAQ />
      <Explore />
    </>
  );
}

export default Home;
