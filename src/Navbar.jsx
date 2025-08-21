import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="bg-darkBlue">
        <div className="flex bg-darkBlue text-white px-10 justify-between items-center max-w-screen-2xl mx-auto">
          <img className="w-10 h-10" src="../src/assets/images/logo.svg" alt="" />
          <ul className="flex py-6 gap-14">
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
        </div>        
      </header>
    </>
  )
}

export default Navbar