  import SectionIntro from "../../ui/SectionIntro";
  import "./Missions.css";
  function Missions() {
    return (
      <section className="missions">
        <SectionIntro
          topicMessage="Mission & Visions"
          headingText="Our Mission & Visions"
          description="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
        />
        <div className="missions-container">
          <div className="card">
            <div className="card-heading">
              <h2>Mission</h2>
              <div className="image-container">
                <img src="/icons/flag.png" alt="missions" />
              </div>
            </div>
            <div className="card-details">
              <p>
                At Little Learners Academy, our mission is to inspire a passion
                for learning and empower young minds to become confident,
                compassionate, and creative individuals. We strive to create a
                safe and inclusive space where children thrive academically,
                socially, and emotionally, setting the stage for a successful
                educational journey.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-heading">
              <h2>Vision</h2>
              <div className="image-container">
                <img src="/icons/binocular.png" alt="missions" />
              </div>
            </div>
            <div className="card-details">
              <p>
                Our vision is to be a beacon of educational excellence, where
                children are encouraged to explore, discover, and express their
                unique talents. We aim to foster a generation of lifelong learners
                equipped with critical thinking, empathy, and a deep appreciation
                for diversity.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default Missions;
