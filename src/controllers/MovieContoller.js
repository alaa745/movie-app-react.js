import axios from "axios";
import MovieModel from "../models/MovieModel";
import MovieDetailsModel from "../models/MovieDetailsModel";

class MovieController {
    static baseUrl = "https://api.themoviedb.org/3/movie";
    static authToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjA4M2FlMzVmZDU0ZGRiYmNmYzY2NzIzNTliNGZhNCIsIm5iZiI6MTcyNTUzNzQwMy4wNTc5OTk4LCJzdWIiOiI2NmQ5OWM3YjJjZTI2MDAzMzU4ZjI5OTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.FR_LfgeR392_vhP8vbca_TUuHE3VFTNxn2Zs0vZRHjw";
    static async getPopularMovie() {
        try {
            const response = await axios.get(`${this.baseUrl}/popular`, {
                headers: {
                    Authorization: `Bearer ${this.authToken}`,
                    accept: 'application/json',
                }
            });
            return response.data.results.map(
                (movie) => new MovieModel(
                    movie.title,
                    movie.id,
                    movie.poster_path,
                    movie.vote_average,
                    movie.backdrop_path,
                    movie.overview
                )
            );
        } catch (error) {
            console.log(error);
        }
    }

    static async getNowPlaying() {
        try {
            const response = await axios.get(`${this.baseUrl}/now_playing`,
                {
                    headers: {
                        Authorization: `Bearer ${this.authToken}`,
                        accept: 'application/json',
                    }
                });

            return response.data.results.map((movie) => new MovieModel(
                movie.title,
                movie.id,
                movie.poster_path,
                movie.vote_average,
                movie.backdrop_path,
                movie.overview
            ));

        } catch (error) {
            //throw custom exception
            console.log(error);
        }
    }

    static async getMovieDetails(movieId) {
        try {
            const response = await axios.get(`${this.baseUrl}/${movieId}`,
                {
                    headers: {
                        Authorization: `Bearer ${this.authToken}`,
                        accept: 'application/json',
                    }
                });
            return new MovieDetailsModel(response.data);
        } catch (error) {
            console.log(error);
        }
    }
}

export default MovieController;