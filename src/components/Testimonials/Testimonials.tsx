import TopicMessage from "../ui/TopicMessage";
import "./Testimonials.css";

import AvatarSlider from "../Slider/variants/AvatarSlider/AvatarSlider";
function Testimonials() {

  return (
    <section className="testimonials-container">
      <div className="testimonials-header">
        <TopicMessage message="Their Happy Words 🤗" />
        <h3>Our Testimonials</h3>
        <p>
          Our testimonials are heartfelt reflections of the nurturing
          environment we provide, where children flourish both academically and
          emotionally.
        </p>
      </div>
      <AvatarSlider />
    </section>
  );
}

export default Testimonials;
