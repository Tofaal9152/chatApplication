import React from "react";
// react icons
import { RiCheckDoubleFill } from "react-icons/ri";
// Constants
import { chating_between } from "../../../../constants";

const MeAndFriendConversation = () => {
  return (
    <div
      // style={{ scrollbarWidth: "thin" }}
      className="hide_scroll pt-[1rem] flex flex-col overflow-y-auto h-full space-y-5 px-[7rem] bg-[#F5F5F7]"
    >
      {chating_between.map((item, index) => {
        return (
          <div key={index} className="">
            {/* ME */}
            <div className="My flex justify-end items-start mb-4">
              <div className="bg-[#E8F3FD] text-white p-3 rounded-lg max-w-[70%] space-y-1">
                <p className="text-sm text-black leading-relaxed">
                  {item.MyText}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[#7C8092]">{item.MyTime}</p>
                  {/* Replace "sent" text with image */}
                  <RiCheckDoubleFill className="text-[#30323E]" />
                </div>
              </div>
            </div>
            {/* Friend */}
            <div className="Friend flex justify-start items-start mb-4 space-x-2 ">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={item.FriendImage}
                alt="Friend"
              />
              <div className="bg-white p-3 rounded-lg max-w-[70%] space-y-1">
                <p className="text-sm">{item.FriendText}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[#7C8092]">{item.FriendMyTime}</p>
                  {/* Replace "sent" text with image */}
                  <RiCheckDoubleFill className="text-[#30323E]" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MeAndFriendConversation;
