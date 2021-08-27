import {configureStore} from '@reduxjs/toolkit'
import reducer from './combine'
const store = configureStore({reducer})

export default store