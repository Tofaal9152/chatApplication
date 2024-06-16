import React from 'react'
import Chat from './Chat/Chat'
import MsxContainer from './MszContainer/MszContainer'
import Notifications from './Notifications/Notifications'

const EXMessenger = () => {
  return (
    <div className="interfont">
      <div className="w-screen h-screen flex">
        <Chat />
        <MsxContainer />
        <Notifications />
      </div>
    </div>
  );
}

export default EXMessenger