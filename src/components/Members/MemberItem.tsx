import { MdLocalPostOffice } from "react-icons/md";

interface MemberItemProps {
  item: {
    img: string;
    name: string;
    title: string;
    description: string;
  };
}
function MemberItem({
  item: { description, img, name, title },
}: MemberItemProps) {
  return (
    <div className="member">
      <div className="heading">
        <div className="picture-container">
          <img src={img} alt="member-picture" />
          <h3>{name}</h3>
        </div>
        <div className="member-icon">
          <MdLocalPostOffice size={20} />
        </div>
      </div>
      <div className="text-container">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MemberItem;
