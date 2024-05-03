import { GiCoffeeCup } from "react-icons/gi";
import { Link } from "react-router-dom";

const SunshineLogo = () => {
    return (
        <Link to="/">
            <div className="flex flex-col justify-center items-center bg-[#111111] text-white rounded-full w-[249px] h-[249px] absolute left-1/2 top-0 -translate-x-1/2 z-10">
                <h1 className="font-inspiration text-5xl">Sunshine Coffee</h1>
                <GiCoffeeCup className="w-[124px] h-auto" />
            </div>
        </Link>
    )
}

export default SunshineLogo
