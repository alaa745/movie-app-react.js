class MovieModel{
    constructor(title , id , poster_Path , vote_average , backdrop_path , overview){
        this.title = title;
        this.poster_path = poster_Path;
        this.id = id;
        this.vote_average = vote_average;
        this.backdrop_path = backdrop_path;
        this.overview = overview;
    }
}

export default MovieModel;