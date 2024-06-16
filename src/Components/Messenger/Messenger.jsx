import React from "react";
import Messenger_Nav from "./Messanger_Nav/Messenger_Nav"
import Show_Message from './Show_Message/Show_Message'
import Chat_List from "./Chat_List/Chat_List"

const EXMessenger = () => {
  return (
    <div className="interfont">
      <div className="w-screen h-screen">
        <div>
          <Messenger_Nav />
        </div>
        <div className="flex">
          <Chat_List />
          <Show_Message />
        </div>
      </div>
    </div>
  );
};

export default EXMessenger;