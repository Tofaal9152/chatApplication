import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        open_notification:false,
        clicked_Setting:false,
        Small_device_Chat_Peopple:false,
    },
    reducers: {
        
        setopen_notification: (state) => {
            state.clicked_Setting = false;
            state.Small_device_Chat_Peopple = false;
            state.open_notification = !state.open_notification
        },
        setclicked_Setting: (state) => {
            state.open_notification = false;
            state.Small_device_Chat_Peopple = false;
            state.clicked_Setting = !state.clicked_Setting
        },
        setSmall_device_Chat_Peopple: (state) => {
            state.clicked_Setting = false;
            state.open_notification = false;
            state.Small_device_Chat_Peopple = !state.Small_device_Chat_Peopple
        },
        
    },
})

// Action creators are generated for each case reducer function
export const { setopen_notification, setclicked_Setting, setSmall_device_Chat_Peopple } = counterSlice.actions

export default counterSlice.reducer