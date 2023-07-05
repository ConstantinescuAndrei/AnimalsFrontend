import './card.css'

interface Props {
    imageUrl: string,
    race: string,
    color: string
}

export const Card = ({ imageUrl, race, color }: Props) => <div className="w-80 h-96 bg-cyan-800 shadow-2xl rounded-2xl flex flex-col gap-2 justify-center items-center">
    <div className="w-64 h-40 my-6 mx-auto">
        <img src={imageUrl} alt={'animal'} className="object-center" />
    </div>
    <p className="text-white text-lg font-bold">Race: {race}</p>
    <p className="text-white text-lg font-bold">Color: {color}</p>
    <button className="w-36 h-12 bg-cyan-500 hover:bg-cyan-700 hover:shadow-3xl transition rounded-xl mt-2">
        <p className="text-white font-bold">
            Open comments
        </p>
    </button>
</div>
