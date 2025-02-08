class MovieDetailsModel {
    constructor(movie) {
        this.backdropPath = movie.backdrop_path;
        this.genres = movie.genres;
        this.id = movie.id;
        this.originCountry = movie.origin_country;
        this.originalLanguage = movie.original_language;
        this.originalTitle = movie.original_title;
        this.overview = movie.overview;
        this.popularity = movie.popularity;
        this.posterPath = movie.poster_path;
        this.releaseDate = movie.release_date;
        this.runtime = movie.runtime;
        this.status = movie.status;
        this.spokenLanguages = movie.spoken_languages;
        this.title = movie.title;
        this.voteAverage = movie.vote_average;
        this.voteCount = movie.vote_count;
    }
}

export default MovieDetailsModel;