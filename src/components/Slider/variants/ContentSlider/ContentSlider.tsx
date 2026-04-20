import { FaAddressBook, FaSignal } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { RiPieChart2Fill } from "react-icons/ri";
import Card from "../../../ui/Card/Card";
import { useSlider } from "../../../../hooks/useSlider";
import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi";
import "./ContentSlider.css"
function ContentSlider() {
  const content = [
    {
      icon: <RiPieChart2Fill  size={60}/>,
      title: "Outstanding Early Childhood Education Award",
      description:
        "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    },
    {
      icon: <FaSignal size={60} />,
      title: "Innovative STEAM Education Award",
      description:
        "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    },
    {
      icon: <FaBoltLightning size={60} />,
      title: "Environmental Stewardship Award",
      description:
        "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
    },
    {
      icon: <FaAddressBook size={60} />,
      title: "Environmental Stewardship Award and Missions ",
      description:
        "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
    },
  ];
  const { trackOffset, next, prev } = useSlider(content.length, "content");
  return (
    <div className="contentSlider">
      <div className="items-container">
        <div className="slider-window">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${trackOffset}%)`,
            }}
          >
            {content.map((item) => (
              <div className="slide" key={item.title}>
                <Card key={item.title} data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="more-info">
        <p>8 More Awards</p>
        <div className="buttons">
          <button className="arrow-button" onClick={prev}>
            <BiSolidLeftArrowAlt size={24} />
          </button>

          <button className="arrow-button" onClick={next}>
            <BiSolidRightArrowAlt size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentSlider;
