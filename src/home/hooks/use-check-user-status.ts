import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router";

export const useCheckUserStatus = () => {
    const user = useSelector(({ user }) => user.data)
    const navigate = useNavigate()

    useEffect(() => {
        if(!user.username) {
            navigate('/login')
        }
    }, [user, navigate])
}
