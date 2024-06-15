import React from "react";
import Black_Man from "../assets/Black_Man.jpeg"; // Adjust the import if necessary

const Avatar_Box = () => {
  return (
    <div className="flex">
      <div className="w-16 h-16 rounded-full">
        <img
          className="w-full h-full object-cover"
          src={Black_Man}
          alt="User Avatar"
        />
      </div>

      <div>
        <h1>Ronald Richards</h1>
        <p className="font-semibold text-[0.9rem]">
          One of the best chatting app I have ever used.
        </p>
      </div>
    </div>
  );
};

export default Avatar_Box;
