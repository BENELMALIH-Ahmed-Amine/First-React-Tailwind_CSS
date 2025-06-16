import React from "react";
import MovisData from "./MovisData";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const { gg } = useParams()
    MovisData

    const movie = MovisData.find(e => e.id == gg)
    return (
        <>
            <div style={{ backgroundImage: `url(${movie.img})` }} className="w-full h-[100vh] bg-no-repeat bg-cover mt-[105px]">
                <div className="w-full h-[100vh] bg-[#00000080] p-[40px] flex flex-col justify-center items-center gap-10">
                    <h2 className="text-6xl">{movie.title}</h2>
                    <div className="w-[400px] h-[600px] z-10 relative">
                        <img src={movie.img} alt="" />
                        <div className="px-3 h-[30px] bg-amber-200 absolute bottom-[4px]">{movie.director}</div>
                    </div>


                    <p className="w-[500px]">{movie.description}</p>
                </div>
            </div>
        </>
    )
}


export default MovieDetails;
