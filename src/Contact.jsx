const Contact = () => {
  return (
    <>
      <section className="bg-WhiteBlue">
        <div className="pt-20 pb-16 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="pb-3">Get In Touch</h1>
            <h1 className="text-3xl pb-10">CONTACT ME</h1>
          </div>
          <form action="">
            <div className="p-5">
              <input type="text" placeholder="Name" 
              className="border border-gray-600 rounded-sm h-12 w-60rem pl-4" />
            </div>
            <div className="p-5">
              <input type="email" placeholder="Email" name="" id="" 
              className="border border-gray-600 rounded-sm h-12 w-60rem pl-4" />
            </div>
            <div className="p-5">
              <input type="text" placeholder="Enter our Message" name="" id="" 
              className="border border-gray-600 rounded-sm h-96 w-60rem pl-4" />
            </div>
            <div className="flex justify-center items-center p-5">
              <button type="submit" className="border rounded-full border-gray-600 w-40 h-10">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact;