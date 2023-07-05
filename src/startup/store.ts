import {createEpicMiddleware} from "redux-observable";
import {applyMiddleware, configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer.ts";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootEpics} from "./rootEpics.ts";

const epicMiddleware = createEpicMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: [epicMiddleware],
    devTools: composeWithDevTools(applyMiddleware(epicMiddleware)),
})

epicMiddleware.run(rootEpics)

export default store
