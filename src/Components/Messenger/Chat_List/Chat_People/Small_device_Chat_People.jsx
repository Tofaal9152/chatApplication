import React from "react";
// react icons
// import { BsFillPlusCircleFill } from "react-icons/bs";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { CiSearch } from "react-icons/ci";
// import { Messenger_Recent } from "../../../../constants";
import { messageContaineer } from "../../../../constants";

const Chat_People = () => {
  return (
    <div className="space-y-3">
      {/* Chats */}
      <div
        className=" flex flex-col overflow-y-auto h-screen space-y-2 p-1 "
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
    </div>
  );
};

export default Chat_People;