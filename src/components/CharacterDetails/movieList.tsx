import axios from "axios";
import Loader from "../Loader";
import React, {useState , useEffect} from "react";
import './charcaterDetails';

type PropType = {
    films: string[];
}
export default function MovieList({films}: PropType){
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [movieList, setMovieList] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    useEffect(()=>{
        getMovies();


    },[]);


    async function getMovies(){
        try{
            setIsFetching(true);
            setErrorMessage('');
        let movie_list = [];
        for(let url of films){
            movie_list.push(
            axios
            .get(url))
        }
        const movie_data = (await Promise.all(movie_list)).map(movie => movie.data.title)
        setMovieList(movie_data);
        setIsFetching(false);
        }
        catch(error){
            setErrorMessage('API Error');
            setIsFetching(false);
        }
        
    
    }

return(
    <div>
        <h4>Movies</h4>
        {errorMessage ? <div>
                    <p className="error">API Error</p>
                    </div> : <></>}
                
                    {isFetching? <Loader/>:
                <ol data-testid="movie-list">
                
                    
                    
                    
                        <div>{movieList.length>0 && (movieList.map((movie,id)=>{
                            return <li key={id} data-testid="movie-item" >
                                {movie}
                            </li>
                        }))}
                        </div>
                        
                
                    
                
                </ol>
                }
    </div>
)


}