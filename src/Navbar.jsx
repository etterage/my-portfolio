const Navbar = () => {
  return (
    <>
      <header className="bg-darkBlue">
        <div className="flex bg-darkBlue text-white px-10 justify-between items-center max-w-screen-2xl mx-auto">
          <img className="w-10 h-10" src="../src/assets/images/logo.svg" alt="" />
          <ul className="flex py-6 gap-14">
            <li>Home</li>
            <li>Aboout</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>        
      </header>
    </>
  )
}

export default Navbar