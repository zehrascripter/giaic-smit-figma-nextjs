import Image from 'next/image'
import React from 'react'

const Progress = () => {
  return (
    <div className="w-full h-full px-10">
    
    <div className="mb-10 w-full flex flex-col items-center justify-center text-center md:flex-row md:text-left md:items-start md:justify-start">
      <div className="text-3xl rounded-xl bg-[#B9FF66]">
        <h1 className="py-2 px-2">Our Working Progress</h1>
      </div>
      <div>
        <p className="my-5 md:mx-5 md:my-0">
        Step-by-Step Guide to Achieving 
        <br />Your Business Goals
        </p>
      </div>
    </div>

      <div className="w-full flex flex-col items-center justify-center">
        <Image src="/images/Card (2).png" alt="progress" width={600} height={500} className='w-[90%] mx-5 my-5'/>
        <Image src="/images/Card (3).png" alt="progress" width={600} height={500} className='w-[90%] mx-5 my-5'/>
        <Image src="/images/Card (4).png" alt="progress" width={600} height={500} className='w-[90%] mx-5 my-5'/>
        <Image src="/images/Card (5).png" alt="progress" width={600} height={500} className='w-[90%] mx-5 my-5'/>
        <Image src="/images/Card (6).png" alt="progress" width={600} height={500} className='w-[90%] mx-5 my-5'/>
        <Image src="/images/Card (7).png" alt="progress" width={600} height={500} className='w-[90%] mx-5 my-5'/>
      </div>


    </div>
  )
}

export default Progress