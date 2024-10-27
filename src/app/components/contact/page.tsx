import Image from "next/image";
import React from "react";


const Contact = () => {
  return (
    <div className="w-full h-full px-10">
      <div className="w-full flex flex-col items-center justify-center text-center md:flex-row md:text-left md:items-start md:justify-start">
        <div className="text-3xl rounded-xl bg-[#B9FF66]">
          <h1 className="py-2 px-2">Contact Us</h1>
        </div>
        <div>
          <p className="my-5 md:mx-5 md:my-0">
            Connect with Us: Let's Discuss Your
            <br /> Digital Marketing Needs
          </p>
        </div>
        </div>



        <div className="bg-gray-400 my-10 rounded-xl w-full flex flex-col items-left justify-left md:flex-row md:items-left md:justify-between px-5 py-5">
         <div className="flex flex-col m-auto md:ml-0 md:items-start md:justify-start">
          <h2>Name</h2>
         <input type="text" placeholder="Name" className="w-full rounded-lg h-7 px-3 py-3 md:w-[500px]"  />
        <br />
        <h2>Email</h2>
         <input type="text" placeholder="Email" className="w-full rounded-lg h-7 px-3 py-3" />
         <br />
         <h2>Message</h2>
         <input type="message" placeholder="" className="w-full rounded-lg h-60 px-3" />
         <br />
         <button className="bg-black text-white font-medium px-5 py-3 rounded-lg w-full">
             Send Message
        </button>
         </div>



         <div className="hidden md:block md:mr-[-250px]">
          <Image src="/images/contact.png" alt="hero" width={500} height={500}/>
         </div>

        </div>


      </div>
  );
};

export default Contact;
