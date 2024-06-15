import React, { useState } from "react";
// Icons
import brain from "../assets/brain.png";
import xxx from "../assets/xxx.png";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

import { FaVk } from "react-icons/fa";

const Signin = () => {
  const [Checkedddd, setCheckedddd] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center">
      {/* first */}
      <div className="fontimonti text-center flex flex-col items-center justify-center space-y-4">
        <img className="Heading w-[62px]" src={brain} alt="" />
        <h1 className="text-[#6408DC] text-3xl font-bold">PolyGrot</h1>
        <p className="text-[#7C8092]">Sign Up Now!</p>
        <div className="flex items-center justify-center space-x-2">
          <div className=" bg-[#F4F6FA] rounded-md p-2 cursor-pointer ">
            <FaVk size={23} />
          </div>
          <div className="bg-[#F4F6FA] rounded-md p-2 cursor-pointer">
            <FaGoogle size={23} />
          </div>
          <div className="bg-[#F4F6FA] rounded-md p-2 cursor-pointer font-bold">
            <img className="w-[25px]" src={xxx} alt="" />
          </div>
        </div>
        <p className="text-[#7C8092]">With Email</p>
      </div>
      {/* Second */}
      <div className="flex flex-col items-start space-y-10">
        <div className="space-y-2">
          <div className="flex flex-col space-y-1">
            <label className="font-semibold" htmlFor="">
              Email
            </label>
            <input
              className="outline-none p-2 rounded-md border-[1.5px] w-[23rem] md:w-[30rem] border-[#8D46F6] fontimonti"
              placeholder="Enter email"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="font-semibold" htmlFor="">
              Password
            </label>
            <input
              className="outline-none p-2 rounded-md border-[1.5px] w-[23rem] md:w-[30rem] border-[#8D46F6]"
              placeholder="Enter Password"
              type="password"
              name=""
              id=""
            />
          </div>
          <div className="flex items-center space-x-2">
            <input checked={Checkedddd} type="checkbox" name="" id="" />
            <p
              onClick={() => setCheckedddd((e) => !e)}
              className="font-semibold cursor-pointer"
            >
              Remember me
            </p>
          </div>
        </div>
        <button className="bg-[#9747ff]  w-full text-center  hover:bg-violet-600 duration-300 text-white font-semibold py-2 px-4 border rounded-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signin;
