import { useState } from "react";
import Modal from "../ui/Modal";
import "./NavButtons.css"
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import { NavLink } from "react-router";
interface NavButtonProps {
  buttons: Array<{ name: string,linkTo:string }>;
}
function NavButtons({ buttons }: NavButtonProps) {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <>
      <ul className="buttons-list">
        {buttons.map((button) => (
          <NavButton linkTo={button.linkTo} key={button.name} name={button.name} />
        ))}
      </ul>
      <button className="burger" onClick={()=>setIsOpen(true)}>
        <HiMenuAlt3  size={28}/>
      </button>
     <Modal open={isOpen}>
        <div className="overlay"></div>
       <div className="menu-list">
       <button className="close" onClick={()=>setIsOpen(false)}>
        <IoIosCloseCircle size={28}/>
       </button>
      <ul className="buttons-list-mobile">
        {buttons.map((button) => (
          <NavButton linkTo={button.linkTo} key={button.name} name={button.name} />
        ))}
      </ul>
      </div>
     </Modal>
    </>
  );
}

function NavButton({ name,linkTo}: { name: string,linkTo:string }) {
  return <li className="button">
    <NavLink style={{color:"#262626",textDecoration:"none"}} to={linkTo}>

    {name}
    </NavLink>
  </li>;
}
export default NavButtons;
