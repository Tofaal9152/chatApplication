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
    <nav>
      <div className={`flex w-full justify-between items-center p-1 `}>
        <img className="md:w-[10rem] w-[6rem]" src={Polyglot} alt="" />
        {/* pc */}
        <div className="hidden custom879:flex justify-center items-center space-x-10 ">
          {navLinksFooter.map((item, index) => {
            return (
              <div
                className="text-black fontymoni cursor-pointer"
                key={item.id}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="flex space-x-5 text-[#FD6003]">
          <FaTwitter className="cursor-pointer" size={22} />
          <FaFacebookF className="cursor-pointer" size={22} />
          <GrInstagram className="cursor-pointer" size={22} />
          <FaGithub className="cursor-pointer" size={22} />
        </div>
      </div>
      <hr />
      <div className="text-[#797B89] flex items-center justify-between p-2 text-xs">
        <p className="text-center ">© Copyright 2024, All Rights Reserved</p>
        <p className="text-center ">Privacy Policy Terms & Conditions</p>
      </div>
    </nav>
  );
};

export default Footer;
