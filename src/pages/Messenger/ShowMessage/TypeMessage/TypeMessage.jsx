import { IoLinkOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Emoji from "emoji-picker-react";
import React, { useState } from "react";

const TypeMessage = () => {
  const [open_emoji, setopen_emoji] = useState(false);
  const [text, settext] = useState("");
  const handleClick = (prev) => {
    settext((e) => e + prev.emoji);
    setopen_emoji(false);
  };
  return (
    <div className="px-[1rem] custom500:px-[2rem] lg:px-[4rem] xl:px-[7rem] flex  bottom-0  bg-white w-full p-2 overflow-x-hidden dark:bg-[#1e2021] dark:border-solid dark:border-[1px] dark:border-gray-700">
      <div className="flex justify-center items-center space-x-2 sm:space-x-4 custom500:w-[90vw]  w-full">
        {/*  */}
        <span className="cursor-pointer p-1 custom500:p-2 rounded-full hover:bg-gray-100 dark:text-white dark:hover:bg-black">
          <IoLinkOutline size={20} />
        </span>
        {/*  */}
        <div className="flex flex-1  items-center bg-white p-1 rounded-full border border-gray-300 dark:bg-[#1e2021]">
          <span className="cursor-pointer p-1 custom500:p-2 rounded-full hover:bg-gray-100 dark:text-white dark:hover:bg-black">
            <FaMicrophone size={20} />
          </span>
          <input
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
            className="flex-1 p-2 text-black text-sm outline-none bg-transparent dark:text-white"
            placeholder="Type a message..."
          />
          <div
            onClick={() => setopen_emoji((e) => !e)}
            className="cursor-pointer p-1 custom500:p-2 rounded-full hover:bg-gray-100 dark:text-white dark:hover:bg-black"
          >
            <BsEmojiSmile size={20} />
          </div>
          <div className="absolute bottom-[5rem] right-0 p-1 ">
            <Emoji onEmojiClick={handleClick} open={open_emoji} />
          </div>
        </div>
        {/*  */}
        <div className="cursor-pointer p-1 custom500:p-2 rounded-full bg-[#9746ff] hover:bg-[#8e3df8] white">
          <IoIosSend className="text-white" size={22} />
        </div>
      </div>
    </div>
  );
};

export default TypeMessage;
