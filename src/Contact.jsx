import { ToastContainer, toast } from 'react-toastify';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pbqpacs', 'template_f0x3h4l', form.current, {
        publicKey: '0GNAgsLfmY1duINMP',
      })
      .then(
        () => {
          toast('Thanks! I got your message ✨')
        },
        (error) => {
          toast('Oops, something went wrong 😢')
        },
      );
  };


  return (
    <>
    <ToastContainer />
      {/* <section className="bg-WhiteBlue">
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
      </section> */}

<section className="bg-WhiteBlue">
        <div className="pt-20 pb-16 flex flex-col justify-center items-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          <div className="flex flex-col justify-center items-center">
            <h1 className="">Get In Touch</h1>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium pb-6 sm:pb-8 lg:pb-14">CONTACT ME</h1>
          </div>
          
          <form ref={form} onSubmit={sendEmail}
           className="w-full max-w-4xl">
                        
            <div className="px-8 flex flex-col">

              <div className="pb-1 sm:pb-2">
                <input type="text" placeholder="Name" name="name"
                className="border border-gray-600 rounded-sm px-2 py-1 lg:py-2 w-full" />
              </div>

              <div className="pb-1 sm:pb-2">
                <input type="email" placeholder="Email" name="email"
                className="border border-gray-600 rounded-sm px-2 py-1 lg:py-2 w-full" />
              </div>

              <div className="pb-1 sm:pb-2">
                <input type="text" placeholder="Subject" name="subject"
                className="border border-gray-600 rounded-sm px-2 py-1 lg:py-2 w-full" />
              </div>

              <div className="pb-2 sm:pb-6 md:pb-8 lg:pb-10">
                <textarea type="text" placeholder="Enter your message" name="message"
                className="border border-gray-600 rounded-sm px-2 py-1 lg:py-2 w-full h-52" />
              </div>

              <div className="self-center">
                <button type="submit" value="Send"
                className="border rounded-full border-gray-600 w-28 h-8 sm:w-32 sm:h-10 md:w-36 md:h-11 lg:w-40 lg:h-12 xl:w-44 xl:h-14">
                  Submit
                </button>
              </div>
            </div>

          </form>
        </div>
      </section>
    </>
  )
}

export default Contact;