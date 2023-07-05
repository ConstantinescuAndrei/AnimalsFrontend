import {BrowserRouter, Route, Routes as Switch} from "react-router-dom";
import {Home} from "../home";
import {Login} from "../login";
import {Register} from "../register";

export const Routes = () => <BrowserRouter>
    <Switch>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
    </Switch>
</BrowserRouter>
