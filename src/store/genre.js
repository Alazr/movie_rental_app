import {createSlice} from '@reduxjs/toolkit'
import { getGenres } from '../services/genreService'

const slice = createSlice({
    name:"genres",
    initialState:[],
    reducers:{
        genresLoaded:(genres,action)=>{
            return action.payload.data
        },
        genresFailed:(genres,action)=>{
            genres = []
        }

    }
})

const {genresLoaded,genresFailed} = slice.actions

export default slice.reducer


export const loadGenres = () => async dispatch => {
    try {
        const {data} = await getGenres()
        dispatch(genresLoaded({data}))
    } catch (error) {
        dispatch(genresFailed(error.message))
    }
}