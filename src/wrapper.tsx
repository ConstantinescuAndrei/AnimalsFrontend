import React from "react";
import {Provider} from "react-redux";
import store from "./startup/store.ts";

export const Wrapper: React.FC<any> = ({ children }) => <Provider store={store}>
    <div className="w-screen h-screen bg-cyan-500 flex justify-center items-center">
        {children}
    </div>
</Provider>
