import {useSelector} from "react-redux";
import {Card} from "./card.tsx";

export const Content = () => {
    const animals = useSelector(({animal}) => animal.data)

    return <div className="flex flex-wrap gap-6 mx-12 my-6">
        {
            animals.length && animals.map((animal: any, index: number) => <Card imageUrl={animal.imageUrl}
                                                                                race={animal.race}
                                                                                color={animal.color} key={index}/>)
        }
    </div>
}
