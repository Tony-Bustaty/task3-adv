import SectionIntro from "../../ui/SectionIntro";
import "./StudentLearn.css";
import SubjectCard from "./SubjectCard";
function StudentLearn() {
  const StudentLearnIntroData = {
    topicMessage: "Our Features",
    description:
      "At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include",
    headingText: "What Students Learn",
  };
  const subjects = [
    {
      image: "/assets/subjects/Language-Arts.png",
      title: "Language Arts",
      description: "Reading, writing, storytelling, and communication skills.",
    },
    {
      image: "/assets/subjects/Mathematics.png",
      title: "Mathematics",
      description:
        "Number sense, basic operations, problem-solving, and logic.",
    },
    {
      image: "/assets/subjects/Science.png",
      title: "Science",
      description:
        "Exploring the natural world through hands-on experiments and investigations.",
    },
    {
      image: "/assets/subjects/Social-Studies.png",
      title: "Social Studies",
      description:
        "Cultivating an understanding of diverse cultures and communities.",
    },
    {
      image: "/assets/subjects/Art-and-crafts.png",
      title: "Arts and Crafts",
      description:
        "Encouraging creativity through various art forms and crafts.",
    },
    {
      image: "/assets/subjects/Physical-Education.png",
      title: "Physical Education",
      description: "Promoting physical fitness, coordination, and teamwork.",
    },
  ];
  return (
    <section>
      <SectionIntro {...StudentLearnIntroData} />
      <div className="subjects-container">
        {subjects.map(subject=><SubjectCard key={subject.title} data={subject}/>)}
      </div>
    </section>
  );
}

export default StudentLearn;
