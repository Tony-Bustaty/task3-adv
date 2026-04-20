import ContentSlider from "../../Slider/variants/ContentSlider/ContentSlider";
import SectionIntro from "../../ui/SectionIntro";
import "./Awards.css";
function Awards() {
  return (
    <section className="awards">
      <SectionIntro
        topicMessage="Our Achievements"
        headingText="Our Awards and Recognitions"
        description="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
      />
      <div className="content">
        <ContentSlider/>
      </div>
    </section>
  );
}

export default Awards;
