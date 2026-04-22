import { FaPaintbrush, FaSignal, FaStar } from "react-icons/fa6";
import SectionHero from "../components/SectionHero/SectionHero";
import Card from "../components/ui/Card/Card";
import SectionIntro from "../components/ui/SectionIntro";
import { MdSunny } from "react-icons/md";
import { HiPuzzlePiece } from "react-icons/hi2";
import { IoBookSharp } from "react-icons/io5";
import '../components/Academics/Academics.css'
import StudentLearn from "../components/Academics/StudentLearn/StudentLearn";
import Gallery from "../components/Gallery/Gallery";
function Academics() {
  const AcademicsHeroData = {
    message: "Academics",
    title: "Nurturing Young Minds for Success",
    description:
      "Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration.",
  };
  const AcademicsSectionIntroData = {
    topicMessage: "our Features",
    headingText: "Our Special Features",
    description:
      "Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!",
  };
  const features = [
    {
      icon: <IoBookSharp size={24} />,
      title: "Thematic Learning",
      description:
        "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
    },
    {
      icon: <FaSignal size={24} />,
      title: "STEAM Education",
      description:
        "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
    },
    {
      icon: <HiPuzzlePiece size={24} />,
      title: "Language Immersion",
      description:
        "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
    },
    {
      icon: <FaPaintbrush size={24} />,
      title: "Art and Creativity",
      description:
        "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
    },
    {
      icon: <MdSunny size={24} />,
      title: "Outdoor Education",
      description:
        "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
    },
    {
      icon: <FaStar size={24} />,
      title: "Play-Based Learning",
      description:
        "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
    },
  ];
  return (
    <main className="Academics">
      <SectionHero {...AcademicsHeroData} />
      <div className="intro">
        <SectionIntro {...AcademicsSectionIntroData} />
      </div>
      <div className="features">
        {features.map((feature) => (
          <Card key={feature.title} data={feature} />
        ))}
      </div>
      <StudentLearn/>
      <Gallery/>
    </main>
  );
}

export default Academics;
