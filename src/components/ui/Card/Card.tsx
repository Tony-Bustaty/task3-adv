export interface CardProps {
  data: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
}
import "./Card.css"
function Card({ data: { icon, title, description } }: CardProps) {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
