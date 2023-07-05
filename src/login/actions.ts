import {createAction} from "@reduxjs/toolkit";

export const login = createAction('login', (email: string, password: string) => {
    return {
        payload: {
            email,
            password
        }
    }
})
