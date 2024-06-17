import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        open_notification:false,
        clicked_Setting:false,
    },
    reducers: {
        
        setopen_notification: (state) => {
            state.open_notification = !state.open_notification
        },
        setclicked_Setting: (state) => {
            state.clicked_Setting = !state.clicked_Setting
        },
        
    },
})

// Action creators are generated for each case reducer function
export const { setopen_notification, setclicked_Setting } = counterSlice.actions

export default counterSlice.reducer