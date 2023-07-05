import {combineReducers} from "@reduxjs/toolkit";
import userSlice from '../slices/user.ts'
import animalSlice from '../home/slices/animals.ts'

export const rootReducer = combineReducers({ user: userSlice, animal: animalSlice })
