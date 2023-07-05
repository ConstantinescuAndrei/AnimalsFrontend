import {combineEpics} from "redux-observable";
import login from "../login/epics/login.ts";
import register from "../register/epics/register.ts";
import {homeEpics} from "../home/epics";

export const rootEpics = combineEpics(login, register, homeEpics)
