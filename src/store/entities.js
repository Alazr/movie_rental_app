import { combineReducers } from "redux";
import moviesReducer from './movies'
import genreReducer from './genre'
const entities = combineReducers({
    movies:moviesReducer,
    genres:genreReducer
})

export default entities;