import React from "react";
import Show_Message from "./Show_Message/Show_Message";
import Chat_List from "./Chat_List/Chat_List";
import Notification from "./Notification/Notification";

const EXMessenger = () => {
  return (
    <div className="interfont flex">
      <Chat_List />
      <Show_Message />
      <Notification/>
    </div>
  );
};

export default EXMessenger;
