const MovieDetailsPoster = ({movie}) => {
    return (
        <div style={{ display: "flex", width: "inherit", marginTop: "50px" }}>
            <div style={{ display: "flex" }}>
                <div style={
                    {
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.posterPath})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "300px",
                        width: "200px",
                        borderRadius: "10px",
                        marginBottom: "10px",
                        display: "flex",
                    }
                }></div>
                <div style={{display: "flex" , flexDirection: "column" , color: "white" , padding: "10px"}}>
                    <p>status:</p>
                    <p style={{color: "grey" , marginTop: "10px"}}>{movie.status}</p>
                    <p style={{marginTop: "15px"}}>Duration:</p>
                    <p style={{color: "grey" , marginTop: "10px"}}>{movie.runtime} Min.</p>
                    <p style={{marginTop: "15px"}}>Genres:</p>
                    <p style={{color: "grey" , marginTop: "10px"}}>{movie.runtime} Min.</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsPoster;