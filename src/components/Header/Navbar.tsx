import Logo from "../ui/Logo";
import "./Navbar.css";
import NavButtons from "./NavButtons";
function Navbar() {
  const buttons = [
    { name: "Home",linkTo:"/"},
    { name: "About Us",linkTo:"/about" },
    { name: "Academics",linkTo:"/academics" },
    { name: "Admissions",linkTo:"/admissions" },
    { name: "Student Life",linkTo:"student-life" },
    { name: "Contact",linkTo:"/contact" },
  ];
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Logo />
      </div>
      <NavButtons buttons={buttons} />
    </nav>
  );
}

export default Navbar;
