import React from "react";
import messenger from "../assets/messenger.png";
const Feature2 = () => {
  return (
    <div className="flex flex-row-reverse items-center justify-between  ">
      <div className="">
        <img className="w-[470px] " src={messenger} alt="" />
      </div>

      <div className="flex flex-col space-y-10">
        <h1 className="text-[#1B1C20] text-4xl w-[25rem] leading-relaxed fontymoni">
          Text in any language you like with instant translations
        </h1>

        <button className="bg-[#9747ff] flex-1 hover:bg-violet-600 duration-300 text-white font-semibold py-2 px-4 border rounded-lg">
          Start Chatting Now
        </button>
      </div>
    </div>
  );
};

export default Feature2;
