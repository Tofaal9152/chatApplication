import React from "react";
import Avater from "../../../../assets/Avater.jpeg";
import { useDispatch } from "react-redux";
import {
    setSmall_device_Chat_Peopple,
  setclicked_Setting,
  setopen_notification,
} from "../../../../Redux/counterSlice";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";

const ResponsiveSidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="flex-col interfont flex items-center justify-start text-center h-screen overflow-y-hidden p-2 space-y-5">
        <img
          className="custom500:w-[1.7rem] w-[1.3rem] custom500:h-[1.7rem] h-[1.3rem] rounded-full object-cover ring-2 ring-green-500 shadow-md"
          src={Avater}
          alt=""
        />
        <div onClick={()=>dispatch(setSmall_device_Chat_Peopple())} className="custom500p-2 p-1 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer">
          <TbMessageCircle2Filled size={20} className="text-white" />
        </div>
        <div
          onClick={() => dispatch(setclicked_Setting())}
          className="custom500p-2 p-1 rounded-full cursor-pointer bg-green-500 hover:bg-green-600"
        >
          <IoMdSettings size={20} className="text-white" />
        </div>
        <div
          onClick={() => dispatch(setopen_notification())}
          className="custom500p-2 p-1 cursor-pointer items-center justify-center bg-green-500 hover:bg-green-600 rounded-full shadow-md"
        >
          <IoIosNotifications className="cursor-pointer text-white" size={20} />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
