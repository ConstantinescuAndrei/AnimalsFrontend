import {combineEpics} from "redux-observable";
import fetchAnimals from "./fetch-animals.ts";

export const homeEpics = combineEpics(fetchAnimals)
