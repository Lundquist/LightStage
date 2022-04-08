import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import projects from './projects'

const reducer = combineReducers({
    projects,
})

const store = configureStore({
  reducer,
})

export default store;
