const MovieCover = ({ movie }) => {
    const style = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdropPath}`,
        height: "430px",
        width: "100%",
        borderRadius: "10px",
        marginTop: "20px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
    return (

        <div style={style}></div>

    );
}

export default MovieCover;