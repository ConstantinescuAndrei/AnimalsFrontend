import {useNavigate} from "react-router";

export const useNavigateToRegister = () => {
    const navigate = useNavigate()

    return () => navigate('/register')
}
