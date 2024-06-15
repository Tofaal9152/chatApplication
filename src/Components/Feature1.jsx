import React from 'react'
import BlackGirl2 from "../assets/BlackGirl2.jpeg";
const Feature1 = () => {
  return (
    <div className="flex items-center justify-between  ">
      <div className="border-blue-500 border-[0.1rem]">
        <img className="w-[470px] relative" src={BlackGirl2} alt="" />
      </div>

      <div className="flex flex-col space-y-10">
        <h1 className="text-[#1B1C20] text-4xl w-[25rem] leading-normal">
          Real-Time Audio Transcriptions
        </h1>
        <p className="text-[#5F616B]">
          Select your preferred language and chat away
        </p>
      </div>
    </div>
  );
}

export default Feature1