const About = () => {
  return (
    <>
      <section className="bg-WhiteBlue">
        <div className="max-w-screen-2xl mx-auto px-10 pt-20">
          <h1 className="text-4xl font-semibold pb-10">About Me</h1>
          <div className="grid grid-cols-3 gap-2 text-DarkBlue">
            <div className="grid grid-rows-3 gap-2 col-span-2 text-shadow-lg">
              <div className="px-5 py-2 shadow-md rounded-xl bg-TransparentWhiteBlue">
                <h2 className="text-lg font-medium">Bio</h2>
                <p className="max-w-80ch"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, et consequuntur ex pariatur consequatur magni eum praesentium omnis libero soluta id quisquam expedita. Ipsa quod expedita aliquam fuga iure nobis.</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="px-5 py-2 shadow-md rounded-xl bg-TransparentWhiteBlue">
                  <h2 className="text-lg font-medium">Education</h2>
                  <p>BS in Information Technology</p>
                  <p>Southern Philippines Institute of Science and Technolgy</p>
                  <p>2019-2023</p>
                </div>
                <div className="px-5 py-2 shadow-md rounded-xl bg-TransparentWhiteBlue">
                  <h2 className="text-lg font-medium">Experience</h2>
                  <p>Junior System Developer</p>
                  <p>August 2023-Present</p>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-medium">Skills</h2>
              </div>
            </div>
            <div className="shadow-md rounded-xl bg-TransparentWhiteBlue">

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About