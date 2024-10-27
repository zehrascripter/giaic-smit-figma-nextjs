import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center w-full py-5 px-5 md:rounded-tl-[10px] md:rounded-tr-[10px] bg-[#191A23] text-white gap-5">
      <div className="flex flex-col items-center justify-center w-full gap-5 md:flex-row md:justify-between">
        <div>
          <Image
            src="/images/logo2.png"
            alt="Logo.png"
            width={100}
            height={100}
          />
        </div>
        <div>
          <ul className="md:flex md:gap-20 md:underline">
            <li>About us</li>
            <li>Services</li>
            <li>Use Case</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <Image
            src="/images/icons.png"
            alt="Logo.png"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* ================Contact============ */}
<div className="md:flex md:justify-between md:gap-80">
      <div className="flex flex-col items-center justify-center w-full gap-5 md:flex-row">
        <div>
          <div className="flex flex-col items-center justify-center w-full gap-5">
            <button className=" mb-5 bg-[#B9FF66] text-black font-medium px-5 py-3 rounded-lg md:mr-20">
              Contact us:
            </button>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-5 md:justify-center md:items-start">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St</p>
            <p>Moonstone City, Stardust State 12345</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 rounded-lg flex flex-col items-center justify-center w-full gap-5 px-5 py-5 md:ml-[300px]">
        <input
          type="Email"
          placeholder="Email"
          className="rounded-lg h-7 px-3 bg-transparent border-white border-2 p-4"
        />
        <div className="flex flex-col items-center justify-center w-full gap-5">
          <button className=" mb-5 bg-[#B9FF66] text-black font-medium px-5 py-3 rounded-lg w-[210px]">
            Contact us:
          </button>
        </div>
      </div>
</div>
      <div className="md:hidden">
        <Image
          src="/images/icons.png"
          alt="Logo.png"
          width={100}
          height={100}
        />
      </div>

      <hr className="border-white border-1 mb-4 w-full" />

      <div className="flex flex-col items-center justify-center w-full gap-5">
        <div>
          <p>© 2023 Positivus. All Rights Reserved.</p>
        </div>
        <div>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
