import axios from "../../axios";
import { useEffect } from "react";
import { useState } from "react";

import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original"



const Row = ({
    title,
    isLargeRow,
    fetchUrl,
}) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const reqest = await axios.get(fetchUrl);
            setMovies(reqest.data.results)
        }

        fetchData();

    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className='row_posters' >

                {movies.map((movie) => (
                    <img 
                    key={movie.id} 
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    />
                ))}

            </div>
        </div>
    )
}

export default Row;