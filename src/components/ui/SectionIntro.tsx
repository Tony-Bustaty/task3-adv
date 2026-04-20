import "./SectionInto.css";

import TopicMessage from "./TopicMessage";
interface SectionIntoProps {
  topicMessage: string;
  headingText: string;
  description: string;
}
function SectionIntro({
  description,
  headingText,
  topicMessage,
}: SectionIntoProps) {
  return (
    <div className="section-intro">
      <TopicMessage message={topicMessage} />
      <h3>{headingText}</h3>
      <p>{description}</p>
    </div>
  );
}

export default SectionIntro;
