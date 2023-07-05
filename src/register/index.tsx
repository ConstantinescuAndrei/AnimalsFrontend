import {useState} from "react";
import {useSelector} from "react-redux";
import {useRegister} from "./hooks/useRegister.ts";
import {useNavigateHome} from "../hooks/use-navigate-home.ts";

export const Register = () => {
    useNavigateHome()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const errorMessage = useSelector(({ user }) => user.error)

    const register = useRegister()

    return <div className="container w-1/3 h-1/2 px-6 bg-red-500 rounded-2xl shadow-2xl">
        <div className="w-full h-full flex flex-col justify-center items-center relative gap-4">
            <h3 className="italic text-5xl font-bold text-white absolute top-12 left-1/2 -translate-x-1/2">Register</h3>

            <div>
                <label className="block text-white text-lg font-bold mb-2 text-left" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="email" placeholder="Enter your email address"
                    value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div>
                <label className="block text-white text-lg font-bold mb-2 text-left" htmlFor="username">
                    Username
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="username" placeholder="Enter your username"
                    value={username} onChange={e => setUsername(e.target.value)} />
            </div>

            <div>
                <label className="block text-white text-lg font-bold mb-2 text-left" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="password" placeholder="Enter your password"
                    value={password} onChange={e => setPassword(e.target.value)} />
            </div>

            <button
                onClick={() => register(email, username, password)}
                className="w-28 absolute bottom-12 h-10 rounded-md bg-cyan-500 hover:bg-cyan-600 hover:shadow-md transition">
                Register
            </button>

            {errorMessage && <p className="text-white underline text-lg font-bold absolute bottom-4">{errorMessage}</p>}

        </div>
    </div>;
}
