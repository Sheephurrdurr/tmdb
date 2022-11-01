// Hooks
import { useState, useEffect } from 'react';

// Router
import { useParams, Link } from "react-router-dom";

// Icons
import { AiFillStar } from 'react-icons/ai';

// Context
import { get } from '../../../Context';


const People = () => {

    const baseImgUrl = "https://image.tmdb.org/t/p/original/";

    const { id } = useParams();

    const [person, setPerson] = useState();
  
    
    useEffect(() => {
        get("person/", id).then(response => setPerson(response));
        get("person/images/", id).then(response => setPerson(response));
        window.scrollTo(0,0);
    }, [id]);


    return (
        <>
                <article style={{marginBottom:"75px"}} className="container row">
                <div className="col-md-4 col-6">
                    <img className="img-fluid" alt={"Poster for " + person?.name} src={baseImgUrl + person?.file_path} />
                </div>
                <div className="col-md-5 col-6">
                    <div className="row">
                        <h1 className="col-md-6">{person?.name}</h1>
                        <div className="col-md-3 offset-md-3">
                            <span className="">{person?.birthday}</span>
                            <AiFillStar className="" style={{color:"gold"}}/>
                        </div>
                        
                    </div>
                        <hr />
                    <div className="col-md-12 col-">
                        <h4>{person?.rating}</h4>
                        {person?.biography}
                    </div>
                        <hr/>
                  
                </div>
            </article>
        </>
    )
};

export default People;