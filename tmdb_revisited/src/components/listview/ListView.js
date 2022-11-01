// Context
import { getAll } from '../../Context';

// Hooks
import { useState, useEffect } from 'react';

// Icons
import {BsFillPlayCircleFill} from 'react-icons/bs';
import {AiFillStar} from 'react-icons/ai';

// Router
import { Link, useParams } from 'react-router-dom';



const Listview = ({ _endpoint, _listCount, _data, _category }) => {

    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() =>{
        if (_data === undefined){
            getAll(_endpoint).then(response => setData(response));
        }
        else {
            setData(_data);
        }
    }, [id, _data]);

    return (
        <>
            <section className="row">
            <h2 className="text-center">{_category}</h2>
            <div className="row d-flex justify-content-center my-4">
                <div style={{backgroundColor:"black", height:"5px", borderRadius:"50px", marginTop:"10px"}} className="col-1"></div>
                    <BsFillPlayCircleFill className="col-1" size={30}/>
                <div style={{backgroundColor:"black", height:"5px", borderRadius:"50px", marginTop:"10px"}} className="col-1"></div>
            </div>
                {
                    data?.results.map((item, index) => (
                       index < _listCount ? 
                        <article style={{paddingBottom:"70px", marginTop:"30px"}} className="col-md-3 col-6">
                            <div className="row">
                                <h5 className="col-12">{(item.title != null?  item.title : item.name)}</h5>
                                <p>{(item.vote_average != null ? item.vote_average : item.popularity.toFixed(1))}<span><AiFillStar style={{color:"gold"}}/></span></p>
                            </div>
                            <Link to={"/" + (item.media_type != null ? item.media_type : "movie") + "/" + item.id}>
                                <img className="img-fluid" src={"https://image.tmdb.org/t/p/original" + (item.poster_path != null ? item.poster_path : item.profile_path)}/>
                            </Link>
                        </article>
                        : 
                        <></>               
                    ))
                }
            </section>
        </>
    );
}

export default Listview;