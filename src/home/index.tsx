import {useCheckUserStatus} from "./hooks/use-check-user-status.ts";

export const Home = () => {
    useCheckUserStatus()

    return <div>Home</div>;
}
