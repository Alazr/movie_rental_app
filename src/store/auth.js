import {createSlice} from '@reduxjs/toolkit'
import login from '../services/authService'
import register from '../services/userServices'
const slice = createSlice({
    name:"auth",
    initialState:{
        currentUser:{},
        authToken:""
    },
    reducers:{
        userRegisterd:(auth,action)=>{
            auth.currentUser = action.payload.user
            auth.authToken = action.payload.token
        },
        userLoggedIn:(auth,action)=>{
            auth.authToken = action.payload.token
        }
    }
})

const {userRegisterd,userLoggedIn} = slice.actions


export default slice.reducer



export const registerUser = (user) => async dispatch =>{
    
    try {
        const res = await register(user)
        dispatch(userRegisterd({
            user:res.data,
            token:res.headers.x-auth-token
            
        }))
        localStorage.setItem("token",res.headers.x-auth-token)
    } catch (error) {
        if (error.response && error.response.status === 400)
            console.log(error.response.data)
    }
    
    
} 
export const loginUser = (acc) => async dispatch =>{
    
    try {
        const res = await login(acc)
        dispatch(userLoggedIn({
            token:res.headers.x-auth-token
        }))
        localStorage.setItem("token",res.headers.x-auth-token)
        
    } catch (error) {
        if (error.response && error.response.status === 400)
            console.log(error.response.data)
    }
    
    
} 

