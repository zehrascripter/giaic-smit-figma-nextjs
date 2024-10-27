
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full px-10 overflow-hidden">
      <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center mb-4">
        <div className="w-full lg:w-[50%] order-1 lg:order-none">
          <h1 className="font-medium text-3xl mb-8 leading-[50px] md:text-4xl ">
            Navigating the
            <br /> digital landscape
            <br />
            for success
          </h1>
          <p className="leading-[30px] mb-8 md:text-[20px] ">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="bg-black text-white font-medium px-5 py-3 rounded-lg">
             Book a consultation
        </button>
        </div>
        <div className="w-full lg:mr-[-90px] lg:w-[50%] order-2 lg:order-none my-5 lg:my-0">
          <Image src="/images/mike.png" alt="hero" width={500} height={500}/>
        </div>
      </div>

      <div className="w-full flex flex-wrap md:flex-nowrap justify-between">

      <Image src="/images/Company logo.png" alt="hero" width={100} height={100} className="px-2 py-2"/>
      <Image src="/images/Company logo (1).png" alt="hero" width={100} height={100} className="px-2 py-2"/>
      <Image src="/images/Company logo (2).png" alt="hero" width={100} height={100} className="px-2 py-2"/>
      <Image src="/images/Company logo (3).png" alt="hero" width={100} height={100} className="px-2 py-2"/>
      <Image src="/images/Company logo (4).png" alt="hero" width={100} height={100} className="px-2 py-2"/>
      <Image src="/images/Company logo (5).png" alt="hero" width={100} height={100} className="px-2 py-2"/>
      </div>
    </div>
  );
}

