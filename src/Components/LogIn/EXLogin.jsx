import React from 'react'
import style from '../../style';
import Login from './Login';
const EXLogin = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className={`${style.paddingX} `}>
        <div className={` h-screen flex items-center justify-center`}>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default EXLogin