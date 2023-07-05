import {createSlice} from "@reduxjs/toolkit";

export type User = {
    attempt: any,
    data: {
        username: string
        email: string,
        password: string
    },
    error: any,
    loading: boolean
}

const initialState: User = {
    attempt: null,
    data: {
        username: '',
        email: '',
        password: ''
    },
    error: null,
    loading: false
}

const userSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {
        attempt: (state, { payload }) => ({ ...state, attempt: payload, loading: true }),
        success: (state, { payload }) => ({ ...state, data: payload, loading: false }),
        failure: (state, { payload }) => ({ ...state, error: payload, loading: false })
    }
})

export const { actions } = userSlice

export default userSlice.reducer
