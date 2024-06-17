import React from "react";
import { IoIosNotifications } from "react-icons/io";
const Notification = () => {
  return (
    <div className="flexWidth3 ">
      <div className="flex p-5  items-center justify-center">
        <IoIosNotifications className="cursor-pointer" size={30} />
        <div>s</div>
      </div>
    </div>
  );
};

export default Notification;
