import { ReactComponent as Logo } from "../assets/logos/apex_logo.svg";

const Navbar = () => {
  return (
    <div>
      <Logo />
      <h1>Apexwallet</h1>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
