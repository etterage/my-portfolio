import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  return (
    <>
      <header className="bg-DarkBlue">
        <div className="flex bg-darkBlue text-white px-10 justify-between items-center max-w-screen-2xl mx-auto">
          <img className="w-10 h-10" src="../src/assets/images/logo.svg" alt="" />
          <div className="sm:py-6 py-8">
            <ul className="hidden sm:flex gap-14">
              <Link to={'/'}>
                <li>Home</li>
              </Link>
              <Link to={'/about'}>
                <li>Aboout</li>
              </Link>
              <Link to={'/projects'}>
                <li>Projects</li>
              </Link>
              <Link to={'/contact'}>
                <li>Contact</li>
              </Link>
            </ul>
            <button className="block sm:hidden">
              <GrMenu />
            </button>
          </div>
        </div>        
      </header>
    </>
  )
}

export default Navbar