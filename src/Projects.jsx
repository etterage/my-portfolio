const Projects = () => {
  return (
    <>
      <section className="bg-DarkBlue">
        <div className="max-w-screen-2xl mx-auto px-10 py-20">
          <h1 className="text-4xl font-semibold pb-10 text-white"> Personal Projects</h1> 
          <div className="grid grid-cols-3 gap-36">
            
            {/* CARD */}
            <div className="bg-TransparentWhiteBlue flex flex-col items-center rounded-3xl p-PointOne">
              {/* IMAGE */}
              <div className="bg-black w-full h-72 rounded-t-3xl">

              </div>
              {/* Details */}
              <div className="py-5">
                <h2 className="font-semibold text-xl">
                  PORTFOLIO WEBSITE
                </h2>
              </div>
              <div className="px-6 py-5">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis animi modi aperiam nobis, vero cupiditate velit eaque quo iusto suscipit, optio magni ut molestiae, amet officia. Reiciendis, quas optio?</p>
              </div>
              
              {/* Footer */}
              <div className="w-full mt-auto">
                <div className="py-4 text-center">
                <p>React | Tailwind | HTML | CSS | JavaScript</p>
              </div>
                <div className="flex justify-between bg-gray-300 py-3 rounded-b-3xl shadow-TopShadow shadow-gray-500 px-6">
                  <a href="">Demo</a>
                  <a href="#">Repo</a>
                </div>
              </div>
            </div>
            
            {/* CARD */}
            <div className="bg-TransparentWhiteBlue flex flex-col items-center rounded-3xl p-PointOne">
              {/* IMAGE */}
              <div className="bg-black w-full h-72 rounded-t-3xl">

              </div>
              {/* Details */}
              <div className="py-5">
                <h2 className="font-semibold text-xl">
                  PORTFOLIO WEBSITE
                </h2>
              </div>
              <div className="px-6 py-5">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis animi modi aperiam nobis, vero cupiditate velit eaque quo iusto suscipit quas optio?</p>
              </div>
              
              {/* Footer */}
              <div className="w-full mt-auto">
                <div className="py-4 text-center">
                <p>React | Tailwind | HTML | CSS | JavaScript</p>
              </div>
                <div className="flex justify-between bg-gray-300 py-3 rounded-b-3xl shadow-TopShadow shadow-gray-500 px-6">
                  <a href="">Demo</a>
                  <a href="#">Repo</a>
                </div>
              </div>
            </div>

            {/* CARD */}
            <div className="bg-TransparentWhiteBlue flex flex-col items-center rounded-3xl p-PointOne">
              {/* IMAGE */}
              <div className="bg-black w-full h-72 rounded-t-3xl">

              </div>
              {/* Details */}
              <div className="py-5">
                <h2 className="font-semibold text-xl">
                  PORTFOLIO WEBSITE
                </h2>
              </div>
              <div className="px-6 py-5">
                <p>Lorem, ipsum dolor sit amets, quas optio?</p>
              </div>
              
              {/* Footer */}
              <div className="w-full mt-auto">
                <div className="py-4 text-center">
                <p>React | Tailwind | HTML | CSS | JavaScript</p>
              </div>
                <div className="flex justify-between bg-gray-300 py-3 rounded-b-3xl shadow-TopShadow shadow-gray-500 px-6">
                  <a href="">Demo</a>
                  <a href="#">Repo</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Projects;