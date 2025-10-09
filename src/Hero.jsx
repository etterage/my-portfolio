const Hero = () => {
  return (
    <>
      <section className="bg-DarkBlue -mt-px">
        <div className="max-w-screen-2xl mx-auto lg:min-h-ScreenMinusNav min-h-SmScreen flex items-center justify-center px-5 sm:px9">
          <div className="text-white block lg:grid grid-cols-3 w-full">
            <div className="flex lg:block flex-col justify-center items-center mx-auto col-span-2">
              <p className="text-xs sm:text-sm lg:text-base">Hi! My name's</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium sm:tracking-wide">Margarette Napoles</h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-400 pt-1 sm:pt-2">Junior Software Developer</p>
              <p className="hidden lg:block text-xl text-gray-400 pt-2 max-w-MaxChar">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magnam tempora quia</p>
            </div>
            <div className="flex justify-center items-center gap-10 pt-8">
              <img className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" src="../src/assets/images/github.svg" alt="Github Logo" />
              <img className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" src="../src/assets/images/linkedin.svg" alt="LinkedIn Logo" />
              <img className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 lg:ml-1" src="../src/assets/images/mail.svg" alt="Mail Logo" />
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Hero;