import React, { useState } from "react";
import Avatar from "../../../assets/Avater.jpeg"; 
import { FaPhone } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { IoLinkOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import Emoji from "emoji-picker-react";
import MeAndFriendConversation from "./MeAndFriendConversation";


const MsxContainer = () => {
  const [emojiOpen, setemojiOpen] = useState(false);
  const [text, settext] = useState("");
  const handleClick = (prev) => {
    settext((e) => e + prev.emoji);
    setemojiOpen(false);
  };
  console.log(text);
  return (
    <div className="flexWidth2 bg-[#F5F5F7]  flex flex-col relative border-x-[1px] border-[#D4D4DD]">
      {/* Navigation */}
      <div className="flex items-center justify-between p-5 shadow-md bg-white">
        <div className="flex justify-start items-start space-x-3">
          <div className="p-2 bg-black rounded-full">
            <img
              className="w-[37px] h-[37px] rounded-[50%] object-cover"
              src={Avatar} // Corrected from Avater to Avatar
              alt="User Avatar"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[1rem] font-semibold text-[#191816]">
              Mindy Moores
            </h1>
            <p className="text-[#7C8092] text-[0.7rem]">
              Last seen 15 minutes ago
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-9">
          <FaPhone className="cursor-pointer" size={27} />
          <IoIosVideocam className="cursor-pointer" size={30} />
          <HiDotsVertical className="cursor-pointer" size={30} />
        </div>
      </div>

      {/* Showing Message */}
      <MeAndFriendConversation/>
      {/* Messages Section */}
      <div className="flex w-full items-center absolute bottom-0 space-x-4 p-4 rounded-lg shadow-md">
        <span className="cursor-pointer">
          <IoLinkOutline size={25} />
        </span>
        <div className="flex-1 flex items-center bg-white rounded-2xl px-3 py-2 border border-gray-300">
          <input
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
            className="flex-1 p-2 text-black text-xl outline-none bg-transparent placeholder-gray-500"
            placeholder="Type a message..."
          />
          <span
            onClick={() => setemojiOpen((e) => !e)}
            className="cursor-pointer onClick={() => setemojiOpen((e) => !e)}"
          >
            <BsEmojiSmile size={25} />
          </span>
          <div className="absolute bottom-[5rem] right-0">
            <Emoji onEmojiClick={handleClick} open={emojiOpen} />
          </div>
        </div>
        <span className="cursor-pointer">
          <FaMicrophone size={25} />
        </span>
        <span className="cursor-pointer ">
          <IoIosSend className="text-[#A144FB]" size={35} />
        </span>
      </div>
    </div>
  );
};

export default MsxContainer;
