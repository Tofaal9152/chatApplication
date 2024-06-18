import React from "react";
import MessageContainer from "./ShowMessage/ShowMessage";
import ChatList from "./ChatList/ChatList";

const Messenger = () => {
  return (
    <div>
      <div className="flex interfont">
        <ChatList />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Messenger;
