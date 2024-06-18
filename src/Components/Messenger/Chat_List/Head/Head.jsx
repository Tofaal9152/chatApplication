import React from 'react'
import { IoMdSettings } from "react-icons/io";
import Avater from "../../../../assets/Avater.jpeg";
import { useDispatch } from 'react-redux';
import { setclicked_Setting } from '../../../../Redux/counterSlice';

const Head = () => {
    const dispatch = useDispatch()
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center space-x-2">
        <img
          className="w-[2.6rem] h-[2.6rem] rounded-full object-cover ring-2 ring-green-500 shadow-md"
          src={Avater}
          alt=""
        />
        <h1 className="text-xl font-bold text-[#191816]">Gal Gadot</h1>
      </div>
      <div
        onClick={() => dispatch(setclicked_Setting())}
        className="p-2 rounded-full cursor-pointer bg-green-500 hover:bg-green-600"
      >
        <IoMdSettings size={20} className="text-white" />
      </div>
    </div>
  );
}

export default Head