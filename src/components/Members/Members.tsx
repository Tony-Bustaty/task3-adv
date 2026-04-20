import SectionIntro from "../ui/SectionIntro";
import MemberItem from "./MemberItem";
import "./Members.css";
function Members() {
  const members = [
    {
      img: "/assets/members/woman3.png",
      name: "Ms. Sarah Anderson",
      title: "Qualification: Master's Degree in Elementary Education",
      description:
        "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
    },
    {
      img: "/assets/members/man1.png",
      name: "Mr. David Roberts",
      title: "Qualification:Bachelor's Degree in Early Childhood Education",
      description:
        "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
    },
    {
      img: "/assets/members/woman2.png",
      name: "Ms. Emily Hernandez",
      title: "Qualification: Diploma in Child Psychology",
      description:
        "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
    },
    {
      img: "/assets/members/man2.png",
      name: "Mr. Michael Turner",
      title: "Qualification: Bachelor's Degree in Physical Education",
      description:
        "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
    },
    {
      img: "/assets/members/woman1.png",
      name: "Ms. Jessica Lee",
      title: "Qualification: Master's Degree in Special Education",
      description:
        "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
    },
    {
      img: "/assets/members/man3.png",
      name: "Mr. William Parker",
      title: "Qualification: Bachelor's Degree in Fine Arts",
      description:
        "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
    },
  ];
  return (
    <section className="members">
      <div className="intro">
        <SectionIntro
          topicMessage="Our Teachers With Expertise"
          headingText="Our Team Members"
          description="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
        />
      </div>
      <div className="members-list">
        {members.map(member=><MemberItem item={member}/>)}
      </div>
    </section>
  );
}

export default Members;
