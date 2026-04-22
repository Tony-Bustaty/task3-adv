import { BiSolidLeftArrowAlt, BiSolidRightArrowAlt } from "react-icons/bi";
import { useSlider } from "../../../../hooks/useSlider";

interface GallerySliderProps {
  images: string[];
  item: {
    title: string;
    description: string;
  };
}
import "./GallerySlider.css";
function GallerySlider({ images, item }: GallerySliderProps) {
  const { trackOffset, next, prev } = useSlider(images.length, "gallery");
  return (
    <div className="gallery-item">
      <div className="gallery-images">
        <div className="slider-window">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${trackOffset}%)`,
            }}
          >
            {images.map((image) => (
              <div className="slide" key={image}>
                <img src={image} alt="image" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="item-header">
        <h4>{item.title}</h4>
        <div className="slider-button">
          <button className="arrow-button" onClick={prev}>
            <BiSolidLeftArrowAlt size={24} />
          </button>

          <button className="arrow-button" onClick={next}>
            <BiSolidRightArrowAlt size={24} />
          </button>
        </div>
      </div>
      <p>{item.description}</p>
    </div>
  );
}

export default GallerySlider;
