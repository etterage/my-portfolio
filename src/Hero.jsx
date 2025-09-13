const Hero = () => {
  return (
    <>
      <section className="bg-DarkBlue">
        <div className="max-w-screen-2xl mx-auto min-h-ScreenMinusNav flex items-center">
          <div className="grid grid-cols-3">
            <div className="text-white py-12 pl-40 pr-10 col-span-2">
              <p>Hi! My name's</p>
              <h1 className="text-6xl font-medium tracking-wider pt-2">Margarette Napoles</h1>
              <p className="text-3xl text-gray-400 pt-4">Junior Software Developer</p>
              <p className="text-xl text-gray-400 pt-2 max-w-MaxChar">I’m committed to growing my skills and exploring new ways to create impactful work.</p>
            </div>
            <div className="hidden flex justify-start items-center gap-10 pl-20">
              <img className="w-12 h-12" src="../src/assets/images/github.svg" alt="Github Logo" />
              <img className="w-12 h-12" src="../src/assets/images/linkedin.svg" alt="LinkedIn Logo" />
              <img className="w-10 h-10 ml-1" src="../src/assets/images/mail.svg" alt="Mail Logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;