// Icons
import {SiThemoviedatabase} from 'react-icons/si';

// Router
import { Link } from 'react-router-dom';

// Components
import Search from '../search/Search';

// SCSS
import './layout.scss';



const Layout = ({children}) => {
    return (
        <>
        <header className="bg-dark row" style={{marginBottom:"50px"}}>
            <Link to="/" className="col-10" style={{textDecoration:"none"}}>
                <div id="tmdbLogo">
                    <SiThemoviedatabase style={{color:"white", margin:"10px"}} size={37} />
                </div>
                <h1 className="text-light">The Movie Database</h1>
            </Link>

            <div className="col-md-3 col-12">
                <Search />
            </div>
        </header>
        
        <main className="container">
            {children}
        </main>
        <footer style={{minHeight:"50px", padding:"15px"}} className="fixed-bottom bg-dark">
            <div className="text-light text-center">
                <div>
                    &copy; The Movie Database - {new Date().getFullYear()}
                </div>
            </div>
        </footer>
        </>
    )
}

export default Layout;