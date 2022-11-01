// Components
import ListView from '../listview/ListView';

const Home = () => {
    return (
        <>
            <ListView _endpoint="movie/now_playing" _listCount="4" _category="Now Playing"/>
            <ListView _endpoint="movie/popular" _listCount="4" _category="Popular"/>
            <ListView _endpoint="movie/top_rated" _listCount="4" _category="Top Rated"/>
        </>
    );
}

export default Home;