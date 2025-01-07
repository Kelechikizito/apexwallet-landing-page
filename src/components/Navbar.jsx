import { useState } from 'react';
import Logo from "../assets/logos/apex_logo.svg?react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0A0D10] py-4 px-4 text-white">
      <div className="container flex flex-col md:grid md:grid-cols-2 justify-between">
        <div className='flex justify-between'>
            <a href="#"><Logo/></a>
            
            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    {isOpen ? <RiCloseLine className="h-6 w-6 text-white" /> : <GiHamburgerMenu className="h-6 w-6 text-white" />}
                </button>
            </div>
        </div>

        <div>
            <ul className={`text-center md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
                <li><a href="#features" className="block py-2 m-5 md:py-0 md:m-0">Features</a></li>
                <li><a href="#team" className="block py-2 m-5 md:py-0 md:m-0">Team</a></li>
                <li><a href="#blog" className="block py-2 m-5 md:py-0 md:m-0">Blog</a></li>
                <li><a href="#contact" className="block py-2 m-5 md:py-0 md:m-0">Contact</a></li>
                <li><a href="#buyTemplate" className="block py-2 m-5 md:py-0 md:m-0">Buy Template</a></li>
            </ul>
       </div>
        
      </div>
    </nav>
  );
};

export default Navbar;


