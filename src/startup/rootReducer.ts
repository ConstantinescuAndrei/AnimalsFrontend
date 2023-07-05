import {combineReducers} from "@reduxjs/toolkit";
import userSlice from '../slices/user.ts'

export const rootReducer = combineReducers({ user: userSlice })
