import React from "react";
// react icons
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Messenger_Recent } from "../../../../constants";
import { messageContaineer } from "../../../../constants";
//
import Head from "../Head/Head";
import { IoMdSettings } from "react-icons/io";
import Avater from "../../../../assets/Avater.jpeg";
import { useDispatch } from "react-redux";
import { setclicked_Setting } from "../../../../Redux/counterSlice";
import { CgWebsite } from "react-icons/cg";

const Chat_People = () => {
  return (
    <div className="space-y-3 ">
      {/* heading */}
      <div className="ChatsAndPlusIcon flex justify-between items-center">
        <h1 className="text-2xl font-bold">Chats</h1>
        <BsFillPlusCircleFill
          className="text-green-500 cursor-pointer"
          size={27}
        />
      </div>
      {/* dropdown */}
      <div className="flex items-center justify-between text-[#7C8092]">
        {Messenger_Recent.map((items, index) => (
          <p className="hover:underline text-sm cursor-pointer" key={items.id}>
            {items.message}
          </p>
        ))}
        <RiArrowDropDownLine className="cursor-pointer" size={25} />
      </div>
      {/* Search */}
      <div className="search">
        <div className="p-2 flex items-center justify-start space-x-2 rounded-full bg-white  border-gray-300 border">
          <CiSearch className="cursor-pointer" size={16} />
          <input
            placeholder="Search for people..."
            className="outline-none bg-transparent text-sm text-[#191816]"
            type="text"
          />
        </div>
      </div>
      {/* Chats */}
      <div
        className="relative flex flex-col  overflow-y-auto h-screen space-y-2 p-1 pb-[16rem]"
        style={{ scrollbarWidth: "thin" }}
      >
        {messageContaineer.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border border-gray-300  cursor-pointer bg-white rounded-xl p-3 shadow-lg"
          >
            <div className="flex justify-start items-start space-x-3">
              <img
                className="w-[2.7rem] h-[2.7rem] rounded-full object-cover"
                src={item.img}
                alt="Avatar"
              />
              <div className="flex flex-col space-y-1">
                <h1
                  className={`${
                    item.avatar_name.length > 15
                      ? "flex flex-col items-start justify-start"
                      : ""
                  } text-sm font-semibold text-[#191816] truncate`}
                >
                  {item.avatar_name.length > 15 ? (
                    <span style={{ whiteSpace: "pre-wrap" }}>
                      {item.avatar_name}
                    </span>
                  ) : (
                    item.avatar_name
                  )}
                </h1>
                <p className="text-[#7C8092] text-xs truncate overflow-hidden">
                  {item.avatar_text.length > 10
                    ? item.avatar_text.substring(0, 24) + "..."
                    : item.avatar_text}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-1 items-end">
              <div className="time text-[#7C8092] text-xs">{item.time}</div>
              <div className="flex items-center justify-center bg-green-500 w-[1rem] h-[1rem] rounded-full mx-auto">
                <p className="text-white text-xs">1</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex p-2 items-center justify-evenly  cursor-pointer absolute left-0 bottom-0 bg-green-500 ">
        <CgWebsite size={25} className="text-white" />
        <p className="text-white font-sm font-bold">Go To Main Website</p>
      </div>
    </div>
  );
};

export default Chat_People;
