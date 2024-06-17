import React from "react";
// Redux
import { useSelector } from "react-redux";
// Components
import Head from "./Head/Head";
import Chat_People from "./Chat_People/Chat_People";
import Setting from "./Setting/Setting";

const Chat = () => {
  const clicked_Setting = useSelector((state) => state.counter.clicked_Setting);

  return (
    <div className="flexWidth1 relative flex flex-col h-screen overflow-y-hidden p-3 space-y-3">
      <div>
        <Head />
      </div>
      <div>
        <Chat_People />
      </div>
      <div
        className={`${
          clicked_Setting ? "left-0" : "left-[-45rem]"
        } h-screen w-[full] top-0  sidebar duration-500 absolute bg-white`}
      >
        <Setting />
      </div>
    </div>
  );
};

export default Chat;
