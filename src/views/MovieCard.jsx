const MovieCard = ({ movie , onClick }) => {
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
        position: "relative",
        backgroundImage: `
        
        url(https://image.tmdb.org/t/p/original${movie.poster_path})
      `,
    }

    return (
        <div className="movie-container" onClick={() => onClick(movie.id)}>
            <div style={style}>
                <div className="overlay"></div>
                <h5 style={{ color: "white", padding: "5px" , position: "absolute"}}>Vote: {movie.vote_average}</h5>
            </div>
            <h5 className="text-style">{movie.title}</h5>
        </div>
    )
};

export default MovieCard;