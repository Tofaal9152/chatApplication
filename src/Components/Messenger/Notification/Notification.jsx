import React from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Avater from "../../../assets/Avater.jpeg";

import { messageContaineer } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setopen_notification } from "../../../Redux/counterSlice";
const Notification = () => {
  // Redux
  const dispatch = useDispatch();
  const open_notification = useSelector(
    (state) => state.counter.open_notification
  );
  return (
    <div
      // style={{ scrollbarWidth: "thin" }}
      className="p-8 hide_scroll h-screen rounded-lg max-w-md mx-auto overflow-y-scroll z-20 "
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 space-x-3">
        <h1 className="text-2xl font-bold text-[#191816]">Notifications</h1>
        <div
          onClick={() => dispatch(setopen_notification())}
          className="duration-500 p-3 cursor-pointer items-center justify-center bg-green-500 rounded-full shadow-md"
        >
          <RiArrowRightDoubleLine
            className="cursor-pointer text-white  duration-300"
            size={25}
          />
        </div>
      </div>
      <div className="">
        {messageContaineer.map((item, index) => {
          return (
            <div className="flex items-start space-x-3 mb-4">
              <img
                className="w-[37px] h-[37px] rounded-full object-cover"
                src={item.img}
                alt="User Avatar"
              />
              <div className="flex flex-col space-y-1">
                <h2 className="text-sm font-semibold text-[#191816]">
                  Mindy Moores
                </h2>
                <p className="text-sm text-[#191816]">
                  {item.avatat_Text.length > 10
                    ? item.avatat_Text.substring(0, 15) + "..."
                    : item.avatat_Text}
                </p>
                <p className="text-xs text-[#7C8092]">1 minute ago</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notification;
