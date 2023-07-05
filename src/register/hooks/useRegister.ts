import {useDispatch} from "react-redux";
import {register} from "../actions.ts";

export const useRegister = () => {
    const dispatch = useDispatch()

    return (email: string, username: string, password: string) => dispatch(register( email, username, password))
}
