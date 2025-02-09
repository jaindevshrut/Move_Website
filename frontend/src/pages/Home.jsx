import MovieCard from "../components/MovieCard"
import {useState, useEffect} from 'react' // useState helps us manage the state of the component
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"
function Home() {

    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
            }catch(err){
                console.log(err);
                setError("Something went wrong, failed to load popular movies");
            }
            finally{
                setLoading(false);
            }
        }
        loadPopularMovies();
    },[]) // useEffect is a hook that is used to run code when the component is mounted or when the component is updated
    const handleSsearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim())return
        if(loading)return
        setLoading(True)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }catch(err){
            console.log(err);
            setError("Failed to search movies...")
        }finally{
            setLoading(false)
        }
    }
    return (

        <div className="home">
            <form className="search-form" onSubmit={searchMovies}>
                <input 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                type = "text" 
                placeholder="Search for a movie..." 
                className="search-input" />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
            {error && <div className="error-message">{error}</div>}
            {loading ? (
                <div className="loading">
                    Loading...
                </div>
            ): (
                <div className="movie-grid">
            {movies.map(movie => (
                // key is the important part here, it helps react keep track of the elements in the list
                movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard key={movie.id} movie={movie} />)
                
            ))}
            </div>
            )}
        </div>
    )
}

export default Home