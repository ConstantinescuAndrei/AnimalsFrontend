import {createSlice} from "@reduxjs/toolkit";

type Animal = {
    attempt: any,
    data: {
        race: string,
        color: string
        imageUrl: string,
        userId: string
    },
    error: any,
    loading: boolean
}

const initialState: Animal = {
    attempt: null,
    data: {
        race: '',
        color: '',
        imageUrl: '',
        userId: ''
    },
    error: null,
    loading: false
}

const AnimalSlice = createSlice({
    name: 'AnimalSlice',
    initialState,
    reducers: {
        attempt: (state) => ({ ...state, loading: true }),
        success: (state, { payload }) => ({ ...state, data: payload, loading: false }),
        failure: (state, { payload }) => ({ ...state, error: payload, loading: false })
    }
})

export const { actions } = AnimalSlice

export default AnimalSlice.reducer


