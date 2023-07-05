import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {useEffect} from "react";

export const useNavigateHome = () => {
    const user = useSelector(({ user }) => user.data)
    const navigate = useNavigate()

    useEffect(() => {
        if(user.username) {
            navigate('/')
        }
    }, [user, navigate])
}
