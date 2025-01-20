const MovieCard = ({ movie }) => {
    const style = {
        borderRadius: "10px",
        width: "inherit",
        height: "200px",
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `
        linear-gradient(to top, rgba(72, 70, 70 , 0.88), rgba(176, 19, 19, 0)),
        url(https://image.tmdb.org/t/p/original${movie.poster_path})
      `,
    }

    return (
        <div className="movie-container">
            <div style={style}>
                <h5 style={{color: "white" , padding: "5px"}}>Vote: {movie.vote_average}</h5>
            </div>
            <h5 className="text-style">{movie.title}</h5>
        </div>
    )
};

export default MovieCard;