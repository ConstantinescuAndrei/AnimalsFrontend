import {createAction} from "@reduxjs/toolkit";

export const register = createAction('register', (email: string, username: string, password: string) => {
    return {
        payload: {
            email,
            username,
            password
        }
    }
})
