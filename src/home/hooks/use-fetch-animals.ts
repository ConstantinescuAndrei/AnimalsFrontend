import {useDispatch} from "react-redux";
import {actions} from "../slices/animals.ts";
import {useEffect} from "react";

export const useFetchAnimals = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.attempt());
    }, [])
}
