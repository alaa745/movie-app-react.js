import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieController from "../controllers/MovieContoller";
import MovieCover from "../components/MovieCover";
import MovieDetailsPoster from "../components/MovieDetailsPoster";

const MovieDetailsView = () => {
    const params = useParams();
    const movieId = params.id;
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const fetchMovieDetails = async () => {
        try {
            let movieDetails = await MovieController.getMovieDetails(movieId);
            console.log(movieDetails);
            setMovie(movieDetails);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovieDetails();
    }, []);
    return (
        !isLoading && <div className="movie-details-main">
            <div style={{ display: "flex", width: "80%" }}>
                <h1 style={{ color: "white" }}>{movie.title}</h1>
            </div>
            <div className="movie-details-container">
                <MovieCover movie={movie} />
                <MovieDetailsPoster movie={movie} />
            </div>
        </div>
    );
}

export default MovieDetailsView;