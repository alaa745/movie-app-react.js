import { useEffect, useState } from "react";
import MovieController from "../controllers/MovieContoller";
import PopularMovieCard from "./PopularMovieCard";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [popularError, setPopularError] = useState(null);
    const [isPopularLoading, setPopularIsLoading] = useState(true);

    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [nowPlayingError, setNowPlayingError] = useState(null);
    const [isNowPlayingLoading, setNowPlayingIsLoading] = useState(true);
    const navigate = useNavigate();
    const fetchPopularMovie = async () => {
        try {
            let popularMovies = await MovieController.getPopularMovie();
            console.log(`popularMovies ${popularMovies}`);
            setPopularMovies(popularMovies);
        } catch (popularError) {
            console.log(popularError);
            setPopularError(popularError);

        } finally {
            setPopularIsLoading(false);
        }
    };

    const fetchNowPlayingMovies = async () => {
        try {
            let nowPlayingMovies = await MovieController.getNowPlaying();
            console.log(nowPlayingMovies);
            setNowPlayingMovies(nowPlayingMovies);
        } catch (error) {
            console.log(error);
            setNowPlayingError(error)
        } finally {
            setNowPlayingIsLoading(false);
        }
    }
    useEffect(() => {
        fetchPopularMovie();
        fetchNowPlayingMovies();
    }, []);

    const onMovieClicked = (movieId) => {
        navigate(`movieDetails/${movieId}`);
        console.log(movieId);
        
    }
    // useEffect(() => {
    //     fetchNowPlayingMovies();
    // }, [popularMovies]);  // this will print the popular movies inside fetchpopularmovies ? 

    return (
        <div className='main'>
            {!isPopularLoading && (<PopularMovieCard movie={popularMovies[14]} />)}
            <div style={{ color: "white", marginTop: "100px", marginBottom: "10px", display: "flex", width: "80%" }}><h2>Now Playing</h2></div>
            <div className="movies-container">
                {!isNowPlayingLoading && nowPlayingMovies.map((movie) => <MovieCard key={movie.id} onClick={onMovieClicked} movie={movie} />)}
            </div>
        </div>
    );
}

export default HomeView;