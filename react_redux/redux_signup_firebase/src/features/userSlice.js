// rxslice (to get the snipit)

import { createSlice } from '@reduxjs/toolkit'

// const [username, setUsername] = useState(null) 
// useState(null) is the initial state
const initialState = {
    userName: null,
    userEmail: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // responsible for giving a new value for a specific state
        setActiveUser : (state, action) => {
            // in place of setUsername()
            state.userName = action.payload.userName   // setUsername (action.payload) is same
            state.userEmail = action.payload.userEmail // here we are passing whatever we set value 
        },
        
        setUserLogOutState : (state) => {
            state.userName = null
            state.userEmail = null
        }
    }
});

// "userName" of useState that return the actual state
// reading a value of a specific state
export const selectUserName = (state) => state.user.userName
export const selectUserEmail = (state) => state.user.userEmail

export const { setActiveUser, setUserLogOutState } = userSlice.actions
export default userSlice.reducer