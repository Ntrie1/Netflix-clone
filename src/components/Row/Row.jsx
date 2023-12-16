import axios from "../../axios";
import { useEffect } from "react";
import { useState } from "react";

import './Row.css';
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original"



const Row = ({
    title,
    isLargeRow,
    fetchUrl,
}) => {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {

        const fetchData = async () => {
            const reqest = await axios.get(fetchUrl);
            setMovies(reqest.data.results)
        }

        fetchData();

    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "99%",
        playerVars: {
          autoplay: 1,
        }
      }

      const handleClick = (movie) => {
        if (trailerUrl) {
            
        }
      }

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className='row_posters' >

                {movies.map((movie) => (
                    <img 
                    key={movie.id} 
                    onClick={() => handleClick(movie)}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    />
                ))}


            </div>
                <YouTube videoId='-XPXGkd4X5s' opts={opts} />
        </div>
    )
}

export default Row;