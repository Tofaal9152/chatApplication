import React from "react";
import Show_Message from "./Show_Message/Show_Message";
import Chat_List from "./Chat_List/Chat_List";
import Change_Language from "./Chat_List/Change_Language/Change_Language";

const EXMessenger = () => {
  return (
    <div>
      <div className="flex interfont">
        <Chat_List />
        <Show_Message />
      </div>
    </div>
  );
};

export default EXMessenger;
