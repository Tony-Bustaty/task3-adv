import TopicMessage from "../../ui/TopicMessage";
import "./AboutHero.css"
function AboutHero() {
  return (
    <section className="about-hero">
      <div className="image-container">
        <img src="/assets/squares-with-shadows.png" alt="squares" />
      </div>
      <div className="content">

      <div className="left-side">
        <TopicMessage message="OverView"/>
        <h1>Welcome to Little Learners Academy</h1>
      </div>
      <div className="right-side">
        <p>
          A leading kinder garden school dedicated to providing a nurturing and
          stimulating environment for young learners. With a commitment to
          excellence in early education, we believe in shaping curious minds and
          building a strong foundation for a lifelong love of learning. Our
          holistic approach fosters intellectual, social, emotional, and
          physical development, ensuring that each child reaches their full
          potential.
        </p>
      </div>
      </div>
    </section>
  );
}

export default AboutHero;
