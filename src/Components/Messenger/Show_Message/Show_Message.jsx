import React, { useState } from "react";
import Avatar from "../../../assets/Avater.jpeg";
import { FaPhone } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { IoLinkOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Emoji from "emoji-picker-react";
import MeAndFriendConversation from "./MeAndFriendConversation";
import Notification from "../Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { setopen_notification } from "../../../Redux/counterSlice";
const MsxContainer = () => {
  // states
  const [open_emoji, setopen_emoji] = useState(false);
  const [text, settext] = useState("");
  // Redux
  const dispatch = useDispatch();
  const open_notification = useSelector(
    (state) => state.counter.open_notification
  );
  // Constanr Variable
  const handleClick = (prev) => {
    settext((e) => e + prev.emoji);
    setopen_emoji(false);
  };
  console.log(text);
  return (
    <div className="flexWidth2 bg-[#F5F5F7]  flex flex-col relative border-x-[1px] border-[#D4D4DD]">
      <div className="flex ">
        {/* 1 */}
        <div className="">
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
            <div className="flex space-x-8">
              <div className="flex items-center justify-center space-x-9">
                <FaPhone className="cursor-pointer" size={27} />
                <IoIosVideocam className="cursor-pointer" size={30} />
                <HiDotsVertical className="cursor-pointer" size={30} />
              </div>
              <div
                onClick={() => dispatch(setopen_notification())}
                className="p-3 cursor-pointer items-center justify-center bg-white rounded-full shadow-md"
              >
                <IoIosNotifications
                  className="cursor-pointer text-[#8D46F6] hover:text-yellow-500"
                  size={30}
                />
              </div>
            </div>
          </div>

          {/* Showing Message */}
          <MeAndFriendConversation />
          {/* Messages Section */}
          <div className="flex w-full justify-center border-4 items-center absolute bottom-0 space-x-4 p-4 rounded-lg shadow-md">
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
                onClick={() => setopen_emoji((e) => !e)}
                className="cursor-pointer onClick={() => setopen((e) => !e)}"
              >
                <BsEmojiSmile size={25} />
              </span>
              <div className="absolute bottom-[5rem] right-0">
                <Emoji onEmojiClick={handleClick} open={open_emoji} />
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
        {/* 2 */}
        <div
          className={`${open_notification ? "block" : "hidden"} bg-[#E1E1E9]`}
        >
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default MsxContainer;
