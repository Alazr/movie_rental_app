import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"UI",
    initialState:{
        perPage:3,
        pageNum:1,
        currentGenre:0
    },
    reducers:{
        pageUpdated:(ui,action)=>{
            ui.pageNum = action.payload
        },
        currentGenreUpdated:(ui,action)=>{
            ui.currentGenre = action.payload,
            ui.pageNum=1
        }
    }
})

export const {pageUpdated,currentGenreUpdated} = slice.actions

export default slice.reducer
