import React from "react";
// Redux
import { useSelector } from "react-redux";
// Components
import Head from "./Head/Head";
import Chat_People from "./Chat_People/Chat_People";
import Setting from "./Setting/Setting";
import ResponsiveSidebar from "./ResponsiveSidebar/ResponsiveSidebar";

const Chat = () => {
  const clicked_Setting = useSelector((state) => state.counter.clicked_Setting);

  return (
    <div className="w-[10%] md:w-[25vw] md:flex-none  md:relative flex md:flex-col md:h-screen md:overflow-y-hidden ">
      <div className="md:hidden block">
        <ResponsiveSidebar />
      </div>
      <div className="md:block hidden">
        <div className="p-2 space-y-5 ">
          <div>
            <Head />
          </div>
          <div>
            <Chat_People />
          </div>
        </div>
        <div
          className={`${
            clicked_Setting ? "left-0" : "left-[-45rem]"
          } md:block hidden h-screen w-[full] top-0 overflow-y-hidden  sidebar duration-500 absolute bg-white`}
        >
          <Setting />
        </div>
      </div>
    </div>
  );
};

export default Chat;
