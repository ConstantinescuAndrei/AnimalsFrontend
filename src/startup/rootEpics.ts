import {combineEpics} from "redux-observable";
import login from "../login/epics/login.ts";
import register from "../register/epics/register.ts";

export const rootEpics = combineEpics(login, register)
