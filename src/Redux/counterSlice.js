import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        open_notification:false,
    },
    reducers: {
        
        setopen_notification: (state) => {
            state.open_notification = !state.open_notification
        },
        
    },
})

// Action creators are generated for each case reducer function
export const { setopen_notification } = counterSlice.actions

export default counterSlice.reducer