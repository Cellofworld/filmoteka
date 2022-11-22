import { Link, Outlet } from "react-router-dom"
import "./layout.css"
import SearchFilm from "../structureComponents/searchFilm/SearchFilm"
function Layout() {
    return (
       <>
            <header>
                <div className="navigation-bar">
                    <Link className="navigation-link" to='/movies'>Movies</Link>
                    <Link className="navigation-link" to='/tvshow'>TvShow</Link>
                    <Link className="navigation-link" to='/cartoons'>Cartoons</Link>
                    <Link className="navigation-link" to='/anime'>Anime</Link>
                </div>
                <SearchFilm />
            </header>
            <Outlet />
            <footer className="footer">
                <div className="footer-item">2022</div>
            </footer>
       </>
    )
}

export default Layout