import {createSlice} from '@reduxjs/toolkit'
import movieService from '../services/movieService'
import {loadGenres} from '../store/genre'
const slice = createSlice({
    name:"movies",
    initialState:{
        list:[],
        movieDetail:null
    },
    reducers:{
        moviesLoaded:(movies,action)=>{
            movies.list = action.payload.data
        },
        movieDeleted:(movies,action)=>{
            if(action.payload.id){
                const idx = movies.list.findIndex(mov=>mov._id === action.payload.id) 
                movies.list.splice(idx,1)
            }else {
                movies.list = action.payload.oldMovies
            }
        },
        moviesFailed:(movies,action)=>{
            movies.list = []
        },
        movieLoaded:(movies,action)=>{
            movies.movieDetail = action.payload.data
        },
        movieAdded:(movies,action)=>{
            if(action.payload.movie){
                movies.list.push(action.payload.movie)
            }else {
                movies.list = action.payload.oldMovies
            }
        }
    }
})

const {moviesLoaded,movieDeleted,moviesFailed,movieLoaded,movieAdded} = slice.actions

export default slice.reducer

export const loadMovies = () => async dispatch => {
    try {
        const {data} = await movieService.getMovies()
        dispatch(moviesLoaded({data}))

    } catch (error) {
        dispatch(moviesFailed(error.message))
    }   
}

export const loadMovie = (id) => async dispatch => {
    try {
        const {data} = await movieService.getMovie(id)
        dispatch(movieLoaded({data}))
    } catch (error) {
        dispatch(moviesFailed(error.message))
    }
   
}

export const deleteMovie = (id,movies) => async dispatch => {
    try {
        dispatch(movieDeleted({id}))
        const {data} = await movieService.deleteMovie(id)
    } catch (error) {
        dispatch(moviesFailed(error.message))
        dispatch(movieDeleted({oldMovies:movies}))
    }
   
} 


export const addMovie = (movie,movies) => async dispatch => {
    try {
        await movieService.saveMovie(movie)
    } catch (error) {
        dispatch(moviesFailed(error.message))
        dispatch(movieAdded({oldMovies:movies}))
    }   
} 


