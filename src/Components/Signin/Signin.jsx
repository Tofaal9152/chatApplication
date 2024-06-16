import React from 'react'
import Signin from './Signin_Components/Signin_Interface';
import style from "../../style";

const EXSignin = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className={`${style.paddingX} `}>
        <div className={` h-screen flex items-center justify-center`}>
          <Signin />
        </div>
      </div>
    </div>
  );
}

export default EXSignin