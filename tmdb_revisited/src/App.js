// Layout
import Layout from "./components/layout/Layout";

// Pages
import Home from './components/pages/Home';
import Movie from "./components/pages/movie/Movie";
import People from "./components/pages/people/People";

// Search
import SearchResult from "./components/search/SearchResult";

// Router
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/person/:id" element={<People />} />
          <Route path="/search/:query" element={<SearchResult/>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
