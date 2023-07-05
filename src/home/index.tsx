import {useCheckUserStatus} from "./hooks/use-check-user-status.ts";
import {useFetchAnimals} from "./hooks/use-fetch-animals.ts";
import {Loading} from "./loading.tsx";
import {useSelector} from "react-redux";
import {Content} from "./content";

export const Home = () => {
    useCheckUserStatus()
    useFetchAnimals()
    const loading = useSelector(({animal}) => animal.loading)

    return <div>
        {
            loading ? <Loading/> : <Content />
        }
    </div>;
}
