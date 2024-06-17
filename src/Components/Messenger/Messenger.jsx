import React from "react";
import Show_Message from "./Show_Message/Show_Message";
import Chat_List from "./Chat_List/Chat_List";
import Setting from "./Chat_List/Setting/Setting";
// import Notification from "./Notification/Notification";

const EXMessenger = () => {
  return (
    <div>
      <div className="interfont flex ">
        <Chat_List />
        <Show_Message />
        {/* <Notification/> */}
      </div>
      {/* <div className="h-[90vh] w-[25%] ">
        <Setting />
      </div> */}
      
      
    </div>
  );
};

export default EXMessenger;
