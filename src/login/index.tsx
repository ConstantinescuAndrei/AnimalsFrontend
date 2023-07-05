import {useNavigateToRegister} from "./hooks/use-navigate-to-register.ts";
import {useState} from "react";
import {useNavigateHome} from "../hooks/use-navigate-home.ts";
import {useLogin} from "./hooks/useLogin.ts";
import {useSelector} from "react-redux";

export const Login = () => {
    useNavigateHome()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const errorMessage = useSelector(({ user }) => user.error)

    const login = useLogin()

    return <div className="container w-1/3 h-1/2 px-6 bg-red-500 rounded-2xl shadow-2xl">
        <div className="w-full h-full flex flex-col justify-center items-center relative">
            <h3 className="italic text-5xl font-bold text-white absolute top-12 left-1/2 -translate-x-1/2">Login</h3>

            <div className="mb-4">
                <label className="block text-white text-lg font-bold mb-2 text-left" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="email" placeholder="Enter your email address"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="mb-4">
                <label className="block text-white text-lg font-bold mb-2 text-left" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="password" placeholder="Enter your password"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button onClick={() => login(email, password)} className="w-28 h-10 rounded-md bg-cyan-500 mt-6 hover:bg-cyan-600 hover:shadow-md transition">
                Login
            </button>

            <p className="text-lg text-white absolute bottom-12">If you don't have an account please go to <span
                onClick={useNavigateToRegister()} className="italic underline hover:cursor-pointer">register</span></p>

            {errorMessage && <p className="text-white underline text-lg font-bold absolute bottom-24">{errorMessage}</p>}
        </div>
    </div>;
}


