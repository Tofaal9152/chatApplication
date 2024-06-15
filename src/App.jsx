import React from "react";

// Adding Style.js and assets
import style from "./style";

// Importing Components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Avatar_Box from "./Components/Avatar_Box";
import Feature_List from "./Components/Feature_List";
import Feature1 from "./Components/Feature1";
import Feature2 from "./Components/Feature2";
import Feature3 from "./Components/Feature3";
import Footer from "./Components/Footer";
import Signin from "./Components/Signin";
import Login from "./Components/Login";

// App Building
const App = () => {
  return (
    <div className="bg-white">
      {/* navbar */}
      <div className=" w-full overflow-hidden">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth} z-10`}>
            <Navbar />
          </div>
        </div>
      </div>
      {/* Hero */}
      <div className=" w-full overflow-hidden h-screen">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth}`}>
            <Hero />
            {/* <Avatar_Box /> */}
          </div>
        </div>
      </div>
      {/* main */}
      <div className={`${style.paddingX} ${style.flexCenter} py-[125px]`}>
        <div className={`${style.boxWidth}`}>
          <Feature_List />
        </div>
      </div>
      {/* <Feature1 /> */}
      <div
        className={`${style.paddingX} ${style.flexCenter} bg-[#F8F8FA] py-[95px]`}
      >
        <div className={`${style.boxWidth}`}>
          <Feature1 />
        </div>
      </div>
      {/* <Feature2 /> */}
      <div
        className={`${style.paddingX} ${style.flexCenter} bg-[#FDFDFD]  py-[95px]`}
      >
        <div className={`${style.boxWidth}`}>
          <Feature2 />
        </div>
      </div>
      {/* <Feature3 /> */}
      <div
        className={`${style.paddingX} ${style.flexCenter} bg-[#F8F8FA] py-[95px]`}
      >
        <div className={`${style.boxWidth}`}>
          <Feature3 />
        </div>
      </div>
      {/* Footer /> */}
      <div
        className={`${style.paddingX} ${style.flexCenter} bg-[#F8F8FA] pb-[1rem]`}
      >
        <div className={`${style.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
