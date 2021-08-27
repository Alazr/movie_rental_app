import {combineReducers} from 'redux'
import entitiesReducer from './entities'
import uIReducer from './uI'
import authReducer from './auth'
const reducer = combineReducers({
    entities:entitiesReducer,
    auth:authReducer,
    ui:uIReducer
})

export default reducer;