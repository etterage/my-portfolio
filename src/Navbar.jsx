// import { Link } from "react-router-dom";
// import { GrMenu } from "react-icons/gr";

// const Navbar = () => {
//   return (
//     <>
//       <header className="bg-DarkBlue">
//         <div className="flex text-white lg:px-10 md:px-8 px-5 justify-between items-center max-w-screen-2xl mx-auto">
//           <img className="lg:w-10 lg:h-10 md:h-8 md:w-8 w-7 h-7" src="../src/assets/images/logo.svg" alt="" />
//           <div className="lg:py-8 md:py-6 py-4">
//             <ul className="hidden sm:flex gap-6 md:gap-10 lg:gap-14 md:text-base lg:text-lg text-sm">
//               <Link to={'/'}>
//                 <li>Home</li>
//               </Link>
//               <Link to={'/about'}>
//                 <li>Aboout</li>
//               </Link>
//               <Link to={'/projects'}>
//                 <li>Projects</li>
//               </Link>
//               <Link to={'/contact'}>
//                 <li>Contact</li>
//               </Link>
//             </ul>
//             <button className="block sm:hidden">
//               <GrMenu />
//             </button>
//           </div>
//         </div>        
//       </header>
//     </>
//   )
// }

// export default Navbar

import { useState } from "react";
import { Link } from "react-router-dom";
import { GrMenu, GrClose } from "react-icons/gr";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-DarkBlue text-white">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto lg:px-10 md:px-8 px-5 py-4">
        {/* logo */}
        <img
          className="lg:w-10 lg:h-10 md:h-8 md:w-8 w-7 h-7"
          src="../src/assets/images/logo.svg"
          alt="logo"
        />

        {/* desktop nav */}
        <ul className="hidden sm:flex gap-6 md:gap-10 lg:gap-14 md:text-base lg:text-lg text-sm">
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/projects"><li>Projects</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>

        {/* menu button for mobile */}
        <button className="block sm:hidden" onClick={toggleMenu}>
          {isOpen ? <GrClose size={20} /> : <GrMenu size={20} />}
        </button>
      </div>

      {/* mobile menu dropdown */}
      <div
        className={`sm:hidden bg-DarkBlue text-white transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-40 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-sm">
          <Link to="/" onClick={() => setIsOpen(false)}><li>Home</li></Link>
          <Link to="/about" onClick={() => setIsOpen(false)}><li>About</li></Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}><li>Projects</li></Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}><li>Contact</li></Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
