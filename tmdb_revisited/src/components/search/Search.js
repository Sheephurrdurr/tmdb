
// Hooks
import { useState } from 'react';

// Router
import { useNavigate } from 'react-router-dom';

// SCSS
import './search.scss';



const Search = () => {

    const [query, setQuery] = useState();
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
       event.preventDefault();
        navigate("/search/" + query);
    }

    const handleFormChange = (event) => {
        let searchQuery = event.target.value;
        setQuery(searchQuery);
    }

    return(
        <>
            <form className="container row" id="searchForm" onSubmit={handleFormSubmit} onChange={handleFormChange}>
                <input type="text" placeholder="Search..." name="query" required className="col-md-8 col-12" id="searchBar"/>
                <button className="col-md-3 col-12" id="searchBtn">Search</button>
            </form>
        </>
    );
}

export default Search;