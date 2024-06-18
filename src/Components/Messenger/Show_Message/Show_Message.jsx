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
import Setting from "../Chat_List/Setting/Setting";
import Chat_List from "../Chat_List/Chat_List";
import Small_device_Chat from "../Chat_List/Chat_People/Small_device_Chat_People";
const MsxContainer = () => {
  // Redux
  const dispatch = useDispatch();
  const clicked_Setting = useSelector((state) => state.counter.clicked_Setting);
  const open_notification = useSelector(
    (state) => state.counter.open_notification
  );
  const Small_device_Chat_Peopple = useSelector(
    (state) => state.counter.Small_device_Chat_Peopple
  );

  return (
    <div className="flexWidth2 flex-1  h-screen flex flex-col relative bg- border-x-[1px] border-[#D4D4DD] overflow-x-hidden">
      {/*1. Nav */}
      <div className="flex items-center custom500:px-[3rem] justify-between p-[0.7rem] px-[1.6rem] lg:px-[5rem] shadow-md bg-white">
        <div className="flex justify-start items-start space-x-3">
          <img
            className="w-[1.7rem] h-[1.7rem] ring-2 ring-green-500 rounded-full object-cover"
            src={Avatar}
            alt="User Avatar"
          />

          <div className="flex flex-col">
            <h1 className="text-sm font-semibold text-[#191816]">
              Mindy Moores
            </h1>
            <p className="text-[#7C8092] text-xs">Last seen 15 minutes ago</p>
          </div>
        </div>
        <div className="flex space-x-3 md:space-x-6 lg:space-x-8">
          <div className="flex items-center justify-center space-x-6 lg:space-x-9">
            <FaPhone className="cursor-pointer" size={20} />
            <IoIosVideocam className="cursor-pointer" size={20} />
            <HiDotsVertical className="cursor-pointer" size={20} />
          </div>
          <div
            onClick={() => dispatch(setopen_notification())}
            className="hidden md:block p-2 cursor-pointer items-center justify-center bg-white rounded-full shadow-md"
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
      <div>
        <div
          className={`${
            open_notification ? "right-0" : "right-[-20rem]"
          } h-screen w-[full] top-0  sidebar duration-500 absolute bg-[#E1E1E9] z-10`}
        >
          <Notification />
        </div>
        {/* Setting when in mobile */}
        <div
          className={`${
            clicked_Setting ? "right-0" : "right-[-45rem]"
          } md:hidden block h-screen w-[full] top-0 overflow-y-hidden  sidebar duration-500 absolute bg-white`}
        >
          <Setting />
        </div>
        {/* Message in mobile */}
        <div
          className={`${
            Small_device_Chat_Peopple ? "right-0" : "right-[-45rem]"
          } md:hidden block h-screen w-[full] top-0 overflow-y-hidden  sidebar duration-500 absolute bg-white`}
        >
          <Small_device_Chat />
        </div>
      </div>
    </div>
  );
};

export default MsxContainer;
