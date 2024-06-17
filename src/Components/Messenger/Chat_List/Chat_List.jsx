import React from "react";
// react icons
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Messenger_NavIcon } from "../../../constants";
import { Messenger_Recent } from "../../../constants";
import { messageContaineer } from "../../../constants";

const Chat = () => {
  return (
    <div className="flexWidth1 flex flex-col h-screen overflow-y-hidden ">
      {/* heading Nav */}
      <div className="icons flex items-center justify-evenly p-5">
        {Messenger_NavIcon.map((items, index) => (
          <div
            key={items.id}
            className="p-2 block bg-[#E1E1E9] rounded-md cursor-pointer"
          >
            {items.icon}
          </div>
        ))}
      </div>

      <div className="p-4">
        {/* heading */}
        <div className="space-y-5">
          <div className="ChatsAndPlusIcon flex justify-between items-center">
            <h1 className="text-[2rem] font-bold">Chats</h1>
            <BsFillPlusCircleFill className="text-[#8D46F6]" size={40} />
          </div>
          {/* dropdown */}
          <div className="flex items-center justify-between text-[#7C8092]">
            {Messenger_Recent.map((items, index) => (
              <p key={items.id}>{items.message}</p>
            ))}
            <RiArrowDropDownLine size={25} />
          </div>
          {/* Search */}
          <div className="search">
            <div className="p-6 flex space-x-2 items-center justify-start bg-white rounded-md h-[2.5rem] border-[#7C8092] border-[1px]">
              <div className="p-">
                <CiSearch size={16} />
              </div>
              <input
                placeholder="Search for people..."
                className="outline-none bg-transparent text-xl text-[#7C8092]"
                type="text"
              />
            </div>
          </div>
          {/* Chats */}
          <div
            className="flex flex-col space-y-2 overflow-y-auto p-1 h-[64vh]"
            style={{ scrollbarWidth: "thin" }}
          >
            {messageContaineer.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-[1px] border-[#D4D4DD] items-center cursor-pointer bg-white rounded-lg p-3 shadow-lg"
              >
                <div className="flex justify-start items-start space-x-3">
                  <img
                    className="w-[48px] h-[48px] rounded-[50%] object-cover"
                    src={item.img}
                    alt="Avatar"
                  />
                  <div className="flex flex-col space-y-2 max-w-3xl">
                    <h1
                      className={`${
                        item.avatat_name.length > 15
                          ? "flex flex-col items-start justify-start"
                          : ""
                      } text-[1rem] font-semibold text-[#191816] truncate`}
                    >
                      {item.avatat_name.length > 15 ? (
                        <span style={{ whiteSpace: "pre-wrap" }}>
                          {item.avatat_name}
                        </span>
                      ) : (
                        item.avatat_name
                      )}
                    </h1>
                    <p className="text-[#7C8092] text-[1rem] truncate overflow-hidden">
                      {item.avatat_Text.length > 10
                        ? item.avatat_Text.substring(0, 15) + "..."
                        : item.avatat_Text}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 items-end">
                  <div className="time text-[#7C8092] text-[0.75rem]">
                    {item.time}
                  </div>
                  <div className="bg-[#8D46F6] w-[20px] h-[20px] rounded-[50%] flex items-center justify-center">
                    <p className="text-white text-[12px]">1</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
