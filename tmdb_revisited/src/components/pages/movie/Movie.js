// Router
import { useParams, Link } from 'react-router-dom';

// Icons
import { AiFillStar } from 'react-icons/ai';

// Hooks
import { useState, useEffect } from 'react';

// Context
import { get } from '../../../Context';

const Movie = () => {

    const baseImgUrl = "https://image.tmdb.org/t/p/original"

    const { id } = useParams();

    const [movie, setMovie] = useState();
    const [credits, setCredits] = useState();
    const [similar, setSimilar] = useState();
    const [providers, setProviders] = useState();

    useEffect(() => {
        get("movie/", id).then(response => setMovie(response));
        get("movie", id + "/credits").then(response => setCredits(response));
        get("movie/", id + "/similar").then(response => setSimilar(response));
        get("movie/", id + "watch", "/providers").then(response => setProviders(response));
        window.scrollTo(0,0);
    }, [id]);

    return(
        <>
            <article style={{marginBottom:"75px"}} className="container row">
                <div className="col-md-4 col-6">
                    <img className="img-fluid" alt={"Poster for " + movie?.title} src={baseImgUrl + movie?.poster_path} />
                </div>
                <div className="col-md-5 col-6">
                    <div className="row">
                        <h1 className="col-md-6">{movie?.title}</h1>
                        <div className="col-md-3 offset-md-3">
                            <span className="">{movie?.vote_average}</span>
                            <AiFillStar className="" style={{color:"gold"}}/>
                        </div>
                        
                    </div>
                        <hr />
                    <div className="col-md-12 col-">
                        <h4>{movie?.tagline}</h4>
                        {movie?.overview}
                    </div>
                        <hr/>
                    <div>
                        {movie?.video}
                    </div>
                </div>
                <div className="col-md-4 my-4">
                    <details style={{userSelect:"none"}}>
                        <summary style={{fontSize:"1.5em"}} className="mb-3">Cast</summary>
                        <ul className="ps-5">
                            {
                                credits?.cast.map((item, index) => (
                                    index < 10 ?
                                    <li>{item.name + " | " + item.character}</li>
                                    : 
                                    <></>
                                ))
                            }
                        </ul>
                    </details>
                </div>
                    <hr/>
                <div className="row my-4">
                    {
                        similar?.results.map((item, index) =>(
                            index < 12 ?
                            <div className="col-lg-2 col-6">
                                <h4 style={{fontSize:"1em"}} className="col-12">{item.title}</h4>
                                <Link to={"/movie/" + item.id}>
                                    <img className="img-fluid" src={baseImgUrl + item?.poster_path} />
                                </Link>
                            </div>
                            : <></>
                        ))
                    }
                </div>
            </article>
        </>
    );
}

export default Movie;