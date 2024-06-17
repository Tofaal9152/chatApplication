import React, { useState } from "react";
import Avatar from "../../../assets/Avater.jpeg";
import { FaPhone } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import Chat from "./Chat/Chat";
import Notification from "../Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { setopen_notification } from "../../../Redux/counterSlice";
import Type_Message from "./Type_Message/Type_Message";
const MsxContainer = () => {
  // Redux
  const dispatch = useDispatch();
  const open_notification = useSelector(
    (state) => state.counter.open_notification
  );
  return (
    <div className="flexWidth2 h-screen flex flex-col relative bg- border-x-[1px] border-[#D4D4DD] overflow-x-hidden">
      {/*1. Nav */}
      <div className="flex items-center justify-between p-[0.7rem] px-[5rem] shadow-md bg-white">
        <div className="flex justify-start items-start space-x-3">
          <img
            className="w-[40px] h-[40px] ring-2 ring-black rounded-[50%] object-cover"
            src={Avatar}
            alt="User Avatar"
          />

          <div className="flex flex-col">
            <h1 className="text-[1rem] font-semibold text-[#191816]">
              Mindy Moores
            </h1>
            <p className="text-[#7C8092] text-[0.7rem]">
              Last seen 15 minutes ago
            </p>
          </div>
        </div>
        <div className="flex space-x-8">
          <div className="flex items-center justify-center space-x-9">
            <FaPhone className="cursor-pointer" size={20} />
            <IoIosVideocam className="cursor-pointer" size={20} />
            <HiDotsVertical className="cursor-pointer" size={20} />
          </div>
          <div
            onClick={() => dispatch(setopen_notification())}
            className="p-2 cursor-pointer items-center justify-center bg-white rounded-full shadow-md"
          >
            <IoIosNotifications
              className="cursor-pointer text-green-500 hover:text-yellow-500"
              size={25}
            />
          </div>
        </div>
      </div>
      {/*2. Chat+Type */}
      <div className="flex flex-col relative  h-screen overflow-y-hidden ">
        <Chat />
        <Type_Message />
      </div>
      {/*3. Notifications Sidebar  */}
      <div
        className={`${
          open_notification ? "right-0" : "right-[-20rem]"
        } h-screen w-[full] top-0  sidebar duration-500 absolute bg-[#E1E1E9] z-10`}
      >
        <Notification />
      </div>
    </div>
  );
};

export default MsxContainer;
