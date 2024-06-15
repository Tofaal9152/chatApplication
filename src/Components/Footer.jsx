import React, { useState } from "react";
// import from asset and style
import Polyglot from "../assets/Polyglot.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

// From dataArray
import { navLinksFooter } from "../constants";

const Footer = () => {
  // state
  return (
    <nav
      className={`custom879:flex w-full hidden justify-between items-center py-6 `}
    >
      <img className="w-[10rem]" src={Polyglot} alt="" />
      {/* pc */}
      <div className="hidden custom879:flex justify-center items-center space-x-10 ">
        {navLinksFooter.map((item, index) => {
          return (
            <div className="text-black fontymoni cursor-pointer" key={item.id}>
              {item.title}
            </div>
          );
        })}
      </div>
      <div className="flex space-x-5 text-[#FD6003]">
        <FaTwitter className="cursor-pointer" lasdf size={22}/>
        <FaFacebookF className="cursor-pointer" size={22}/>
        <GrInstagram className="cursor-pointer" size={22}/>
        <FaGithub className="cursor-pointer" size={22}/>
      </div>   

      {/* mobile */}
      {/* <div className="custom879:hidden flex items-center justify-end space-x-7">
        <img
          className="relative cursor-pointer w-[1.3rem] z-10 invert"
          onClick={() => setopen_close((e) => !e)}
          src={open_close ? menu : close}
          alt=""
        />

        <div
          className={`${
            open_close ? "hidden" : "flex"
          } custom879:hidden flex-col bg-white h-screen items-start flex-1  space-y-4 fixed top-[0] overflow-x-hidden right-0 min-w-[140px] p-4 sidebar`}
        >
          {navLinksFooter.map((item, index) => {
            return (
              <div
                className="text-black fontymoni cursor-pointer mt-[4.1rem]"
                key={item.id}
              >
                {item.title}
              </div>
            );
          })}
          <div className="flex custom879:hidden flex-col items-center space-y-3 absolute bottom-[4rem] right-2 ">
            <p className="text-black fontymoni cursor-pointer ">Login</p>
            <button className="bg-[#9747ff] flex-1 hover:bg-violet-600 duration-300 text-white font-semibold py-2 px-4 border rounded-lg">
              Get Started Free
            </button>
          </div>
        </div>
      </div> */}
    </nav>
  );
};

export default Footer;
