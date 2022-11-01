// Hooks
import { useState, useEffect } from 'react';

// Router
import { useParams } from 'react-router-dom';

// Context
import { search } from '../../Context';

// Components
import ListView from '../listview/ListView';

const SearchResult = () => {

    const { query } = useParams();
    const [result, setResult] = useState();

    useEffect(() => {
        search("search/multi", "query=" + query).then(response => setResult(response));
    }, [query]);

    return(
        <>
            {
                result !== undefined ?
                <ListView _data={result} _title={"Showing Results for: " + query} _listCount="24" />
                : <></>
            }
            
        </>
    );
}
export default SearchResult;