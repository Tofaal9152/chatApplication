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
        <FaTwitter className="cursor-pointer"  size={22}/>
        <FaFacebookF className="cursor-pointer" size={22}/>
        <GrInstagram className="cursor-pointer" size={22}/>
        <FaGithub className="cursor-pointer" size={22}/>
      </div>
    </nav>
  );
};

export default Footer;
