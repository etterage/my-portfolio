
// const Projects = () => {
//   return (
//     <>
//       <section className="bg-DarkBlue py-10 xl:pb-32 lg:pb-20">
//         <div className="max-w-screen-2xl mx-auto px-8 md:px-10 sm:pt-6 lg:pt-10 text-xs sm:text-sm lg:text-base xl:text-lg">
//           <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium lg:font-semibold pb-16 sm:pb-10 lg:pb-16 text-WhiteBlue"> Personal Projects</h1> 

//           <div className="grid grid-cols-1 gap-36">
//             {/*  */}
//             <div className="flex bg-slate-400">
            
//               <div className="bg-TransparentWhiteBlue flex flex-col items-center rounded-3xl p-PointOne w-64">
//                 {/* IMAGE */}
//                 <div className="bg-black w-full h-36 rounded-t-3xl">
//                 </div>
//                 {/* Details */}
//                 <div className="py-3 pb-5">
//                   <h2 className="font-semibold text-sm">
//                     Portfolio Website
//                   </h2>
//                 </div>
//                 <div className="px-6">
//                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis animi modi aperiam nobis, vero cupiditate velit eaque quo iusto suscipit, optio magni ut molestiae, amet officia. Reiciendis, quas optio?</p>
//                 </div>
              
//                 {/* Footer */}
//                 <div className="w-full mt-auto">
//                   <div className="py-4 text-center">
//                   <p>React | Tailwind | HTML | CSS | JavaScript</p>
//                 </div>
//                   <div className="flex justify-between bg-gray-300 rounded-b-3xl shadow-TopShadow shadow-gray-500 py-2 px-6">
//                     <a href="">Demo</a>
//                     <a href="#">Repo</a>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-TransparentWhiteBlue flex flex-col items-center rounded-3xl p-PointOne w-64">
//                 {/* IMAGE */}
//                 <div className="bg-black w-full h-36 rounded-t-3xl">
//                 </div>
//                 {/* Details */}
//                 <div className="py-3 pb-5">
//                   <h2 className="font-semibold text-sm">
//                     Portfolio Website
//                   </h2>
//                 </div>
//                 <div className="px-6">
//                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis animi modi aperiam nobis, vero cupiditate velit eaque quo iusto suscipit, optio magni ut molestiae, amet officia. Reiciendis, quas optio?</p>
//                 </div>
              
//                 {/* Footer */}
//                 <div className="w-full mt-auto">
//                   <div className="py-4 text-center">
//                   <p>React | Tailwind | HTML | CSS | JavaScript</p>
//                 </div>
//                   <div className="flex justify-between bg-gray-300 rounded-b-3xl shadow-TopShadow shadow-gray-500 py-2 px-6">
//                     <a href="">Demo</a>
//                     <a href="#">Repo</a>
//                   </div>
//                 </div>
//               </div>


//               <div className="bg-TransparentWhiteBlue flex flex-col items-center rounded-3xl p-PointOne w-64">
//                 {/* IMAGE */}
//                 <div className="bg-black w-full h-36 rounded-t-3xl">
//                 </div>
//                 {/* Details */}
//                 <div className="py-3 pb-5">
//                   <h2 className="font-semibold text-sm">
//                     Portfolio Website
//                   </h2>
//                 </div>
//                 <div className="px-6">
//                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis animi modi aperiam nobis, vero cupiditate velit eaque quo iusto suscipit, optio magni ut molestiae, amet officia. Reiciendis, quas optio?</p>
//                 </div>
              
//                 {/* Footer */}
//                 <div className="w-full mt-auto">
//                   <div className="py-4 text-center">
//                   <p>React | Tailwind | HTML | CSS | JavaScript</p>
//                 </div>
//                   <div className="flex justify-between bg-gray-300 rounded-b-3xl shadow-TopShadow shadow-gray-500 py-2 px-6">
//                     <a href="">Demo</a>
//                     <a href="#">Repo</a>
//                   </div>
//                 </div>
//               </div>


//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Projects;


const Projects = () => {
  return (
    <>
      <section className="bg-DarkBlue py-16 sm:py-20 md:py-24 lg:py-28 pb-20 sm:pb-24 md:pb-28 lg:pb-32">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-10 sm:pt-6 lg:pt-10 text-xs sm:text-sm lg:text-base xl:text-lg">
          {/* restored: left-aligned title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium lg:font-semibold pb-8 sm:pb-14 md:pb-16 lg:pb-20 text-WhiteBlue">
            Personal Projects
          </h1>

          {/* grid container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 lg:gap-16">
            
            {/* CARD 1 */}
            <div className="bg-TransparentWhiteBlue flex flex-col rounded-3xl p-PointOne w-full max-w-sm mx-auto sm:mx-0">
              <div className="bg-black w-full h-36 rounded-t-3xl" />
              <div className="py-3 pb-5 px-4 flex flex-col flex-grow">
                <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                  Portfolio Website
                </h2>
                <p className="mt-2 text-xs sm:text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis animi modi aperiam nobis, vero cupiditate velit eaque quo iusto suscipit, optio magni ut molestiae, amet officia. Reiciendis, quas optio?
                </p>
              </div>
              <div className="w-full mt-auto">
                <div className="py-4 text-center">
                  <p className="text-xs sm:text-sm">React | Tailwind | HTML | CSS | JavaScript</p>
                </div>
                <div className="flex justify-between bg-gray-300 rounded-b-3xl shadow-TopShadow shadow-gray-500 py-2 px-6">
                  <a href="#">Demo</a>
                  <a href="#">Repo</a>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-TransparentWhiteBlue flex flex-col rounded-3xl p-PointOne w-full max-w-sm mx-auto sm:mx-0">
              <div className="bg-black w-full h-36 rounded-t-3xl" />
              <div className="py-3 pb-5 px-4 flex flex-col flex-grow">
                <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                  Portfolio Website
                </h2>
                <p className="mt-2 text-xs sm:text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis animi modi aperiam nobis, vero cupiditate velit eaque quo iusto suscipit, optio magni ut molestiae, amet officia. Reiciendis, quas optio?
                </p>
              </div>
              <div className="w-full mt-auto">
                <div className="py-4 text-center">
                  <p className="text-xs sm:text-sm">React | Tailwind | HTML | CSS | JavaScript</p>
                </div>
                <div className="flex justify-between bg-gray-300 rounded-b-3xl shadow-TopShadow shadow-gray-500 py-2 px-6">
                  <a href="#">Demo</a>
                  <a href="#">Repo</a>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-TransparentWhiteBlue flex flex-col rounded-3xl p-PointOne w-full max-w-sm mx-auto sm:mx-0">
              <div className="bg-black w-full h-36 rounded-t-3xl" />
              <div className="py-3 pb-5 px-4 flex flex-col flex-grow">
                <h2 className="font-semibold text-sm sm:text-base lg:text-lg">
                  Portfolio Website
                </h2>
                <p className="mt-2 text-xs sm:text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur blanditiis animi modi aperiam nobis,
                </p>
              </div>
              <div className="w-full mt-auto">
                <div className="py-4 text-center">
                  <p className="text-xs sm:text-sm">React | Tailwind | HTML | CSS | JavaScript</p>
                </div>
                <div className="flex justify-between bg-gray-300 rounded-b-3xl shadow-TopShadow shadow-gray-500 py-2 px-6">
                  <a href="#">Demo</a>
                  <a href="#">Repo</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

