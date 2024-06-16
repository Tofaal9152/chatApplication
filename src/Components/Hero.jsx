import React from "react";
// React Icons
import { FaArrowRight } from "react-icons/fa6";
import Pink_Girl from "../assets/Pink_Girl.png";
import Pink_Girrl from "../assets/Pink_Girrl.png";
import {  useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-center">
      <div className="w-[400px] md:w-[509px] h-[358px] space-y-5 ">
        <h1 className="monospace text-3xl text-[#1B1C20] font-bold">
          Start chatting with anyone, anytime, anywhere with Polyglot
        </h1>
        <p className="fontymoni text-sm text-[#5F616B]">
          Great software that allows you to chat from any place at any time
          without any interruption
        </p>
        <div
          onClick={() => navigate("/messenger")}
          className="button cursor-pointer flex text-center items-center justify-center space-x-2 bg-[#9747ff]  hover:bg-violet-600 duration-300 text-white font-semibold py-2 px-4  rounded-lg"
        >
          <span className="">Start Chating Now</span>
          <FaArrowRight size={19} />
        </div>
      </div>
      <div className="Image_Girl w-[39rem] h-[36rem] ">
        <img className="" src={Pink_Girrl} alt="" />
      </div>
    </div>
  );
};

export default Hero;
