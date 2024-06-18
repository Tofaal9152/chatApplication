import React from "react";
import MessageContainer from "./ShowMessage/ShowMessage";
import ChatList from "./ChatList/ChatList";

const Messenger = () => {
  let darkMode = true;

  return (
    <div>
      <div className={`flex interfont ${darkMode ? "dark" : ""}`}>
        <ChatList />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Messenger;
