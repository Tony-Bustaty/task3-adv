import Awards from "../components/About/Awards/Awards";
import Missions from "../components/About/Missions/Missions";
import Members from "../components/Members/Members";

import History from "../components/OurHistory/History";
import SectionHero from "../components/SectionHero/SectionHero";

function About() {
  const AboutHeroData = {
    message: "OverView",
    title: "Welcome to Little Learners Academy",
    description: `A leading kinder garden school dedicated to providing a nurturing and
          stimulating environment for young learners. With a commitment to
          excellence in early education, we believe in shaping curious minds and
          building a strong foundation for a lifelong love of learning. Our
          holistic approach fosters intellectual, social, emotional, and
          physical development, ensuring that each child reaches their full
          potential.`,
  };
  return (
    <>
      <SectionHero
        {...AboutHeroData}
      />
      <Missions />
      <Awards />
      <History />
      <Members />
    </>
  );
}

export default About;
