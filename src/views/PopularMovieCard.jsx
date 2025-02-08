const PopularMovieCard = ({ movie }) => {
    const style = {
        borderRadius: "10px",
        width: "100%",
        height: "100%",
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `
        linear-gradient(to right, rgba(72, 70, 70 , 0.88), rgba(176, 19, 19, 0)),
        url(https://image.tmdb.org/t/p/original${movie.backdrop_path})
      `,
    };
    return (
        <div className="popular-section">
            <h1 style={{ color: "white" }}>Explore</h1>
            <h5 style={{ color: "rgba(134, 134, 134, 1)", marginTop: "5px" }}>What are you gonna watch today ?</h5>
            <div style={style}> 
                <h1 style={{ color: "white", marginLeft: "20px", marginTop: "100px" }}>{movie.title}</h1>
                <h5 style={{ color: "white", marginLeft: "20px", marginTop: "10px", width: "50%", fontWeight: "normal" }}>{movie.overview}</h5>

            </div>
        </div>
    );

}

export default PopularMovieCard;
