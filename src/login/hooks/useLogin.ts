import {useDispatch} from "react-redux";
import {login} from "../actions.ts";

export const useLogin = () => {
    const dispatch = useDispatch()

    return (email: string, password: string) => dispatch(login(email, password))
}
