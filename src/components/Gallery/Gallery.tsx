  import { useState } from "react";
  import GallerySlider from "../Slider/variants/GallerySlider/GallerySlider";
  import SectionIntro from "../ui/SectionIntro";
  import Filter from "./Filter";
  import "./Gallery.css";
  function Gallery() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [filter, setFilter] = useState("All");
    const galleryData = [
      {
        images: [
          "/assets/gallery/img17.png",
          "/assets/gallery/img18.png",
          "/assets/gallery/img19.png",
          "/assets/gallery/img20.png",
          "/assets/gallery/img1.png",
          "/assets/gallery/img2.png",
        ],
        title: "Classrooms",
        description:
          "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
      },
      {
        images: [
          "/assets/gallery/img1.png",
          "/assets/gallery/img2.png",
          "/assets/gallery/img3.png",
          "/assets/gallery/img4.png",
        ],
        title: "Library",
        description:
          "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
      },
      {
        images: [
          "/assets/gallery/img5.png",
          "/assets/gallery/img6.png",
          "/assets/gallery/img7.png",
          "/assets/gallery/img8.png",
          "/assets/gallery/img3.png",
          "/assets/gallery/img4.png",
        ],
        title: "Science Lab",
        description:
          "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
      },
      {
        images: [
          "/assets/gallery/img9.png",
          "/assets/gallery/img10.png",
          "/assets/gallery/img11.png",
          "/assets/gallery/img12.png",
          "/assets/gallery/img7.png",
          "/assets/gallery/img8.png",
        ],
        title: "Computer Lab",
        description:
          "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills",
      },
      {
        images: [
          "/assets/gallery/img13.png",
          "/assets/gallery/img14.png",
          "/assets/gallery/img15.png",
          "/assets/gallery/img16.png",
          "/assets/gallery/img9.png",
          "/assets/gallery/img10.png",
          "/assets/gallery/img11.png",
        ],
        title: "Garden and Nature Area",
        description:
          "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
      },
    ];
    const galleryFilters = galleryData.map((item) => item.title);
    const GalleryIntroData = {
      topicMessage: "Our Gallery",
      headingText: "Our Rooms Gallery",
      description:
        "Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.",
    };
    const galleryToBeDisplayed =
      filter === "All"
        ? galleryData
        : galleryData.filter((item) => {
            return item.title === filter;
          });

    return (
      <section>
        <SectionIntro {...GalleryIntroData} />
        <div className="buttons-filter">
          <Filter
            isActive={activeIndex === 0}
            onClick={() => {
              setActiveIndex(0);
              setFilter("All");
            }}
            filter="All"
          />
          {galleryFilters.map((filter, index) => (
            <Filter
              key={filter}
              isActive={activeIndex === index + 1}
              onClick={() => {
                setActiveIndex(index + 1);
                setFilter(filter);
              }}
              filter={filter}
            />
          ))}
        </div>
        <div className="galleries-container">
          {}
          {galleryToBeDisplayed.map((gallery) => (
            <GallerySlider
              key={gallery.title}
              images={gallery.images}
              item={gallery}
            />
          ))}
        </div>
      </section>
    );
  }

  export default Gallery;
