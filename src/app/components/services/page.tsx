import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div className="w-full h-full px-10">
      <div className="w-full flex flex-col items-center justify-center text-center md:flex-row md:text-left md:items-start md:justify-start">
        <div className="text-3xl rounded-xl bg-[#B9FF66]">
          <h1 className="py-2 px-2 ">Services</h1>
        </div>
        <div>
          <p className="my-5 md:mx-5 md:my-0">
            At our digital marketing agency, we offer a range of services to
            help
            <br /> businesses grow and succeed online. These services include
          </p>
        </div>
      </div>

      <div className="mb-10 w-full flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between">
        <div className="mt-10">
          <Image src="/images/Card.png" 
          alt="Logo" 
          width={550} 
          height={500} />
        </div>
        <div className="mt-10">
          <Image
            src="/images/Card (1).png"
            alt="Logo"
            width={550}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
