import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi";
import { useSlider } from "../../../../hooks/useSlider";
import Testimony from "../../../Testimonials/Testimony";

function AvatarSlider() {
  const testimonials = [
    {
      avatar: "/icons/icongirl.png",
      name: "Jennifer B",
      rating: 5,
      testimony:
        "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      avatar: "/icons/iconman.png",
      name: "David K",
      rating: 5,
      testimony:
        "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    },
    {
      avatar: "/icons/icongirl2.png",
      name: "Emily L",
      rating: 5,
      testimony:
        "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
    {
      avatar: "/icons/icongirl2.png",
      name: "Emily L",
      rating: 5,
      testimony:
        "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
    {
      avatar: "/icons/icongirl2.png",
      name: "Emily L",
      rating: 5,
      testimony:
        "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
    {
      avatar: "/icons/icongirl2.png",
      name: "Emily L",
      rating: 5,
      testimony:
        "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
  ];
  const { next, prev, trackOffset } = useSlider(
    testimonials.length,
    "avatar",
  );
  return (
    <>
      <div className="testimonials">
        <div className="left-arrow">
          <button className="arrow-button" onClick={prev}>
            <BiSolidLeftArrowAlt size={24} />
          </button>
        </div>
        <div className="slider-window">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${trackOffset}%)`,
            }}
          >
            {testimonials.map((testimony) => (
              <div className="slide" key={testimony.name}>
                <Testimony key={testimony.name} testimony={testimony} />
              </div>
            ))}
          </div>
        </div>
        <div className="right-arrow">
          <button className="arrow-button" onClick={next}>
            <BiSolidRightArrowAlt size={24} />
          </button>
        </div>
      </div>
      <div className="mobile-arrows">
        <button className="arrow-button" onClick={prev}>
          <BiSolidLeftArrowAlt size={24} />
        </button>
        <button className="arrow-button" onClick={next}>
          <BiSolidRightArrowAlt size={24} />
        </button>
      </div>
    </>
  );
}

export default AvatarSlider;
