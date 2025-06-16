import React from "react";
import MovisData from "./MovisData";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const n = useNavigate()
    MovisData

    return (
        <div className="bg-amber-700 w-full flex flex-wrap justify-center px-[150px] pt-15 gap-10 mt-[105px]">
            {
                MovisData.map((m, index) =>
                (
                    <div key={index} className="w-[350px] flex flex-col justify-center items-center relative">
                        <div className="h-[500px]"><img className="h-full" src={m.img} alt={m.title} /></div>

                        <button className="bg-amber-800 px-3 py-1 border-2 rounded-2xl hover:bg-amber-700  text-white absolute" onClick={() => n('/Movies/' + m.id)}>See Details</button>
                    </div>
                )
                )
            }
        </div>
    )
}

export default Home;