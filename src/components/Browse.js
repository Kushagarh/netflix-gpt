// import { useEffect } from "react";
// import { API_OPTIONS } from "../utilis/constants";
import Header from "./Header";
// import { useDispatch } from "react-redux";
// import { addNowPlayingMovies } from "../utilis/moviesSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse=()=>{
 //fetch the data from TMBD API and updata the moviesSlice 
 useNowPlayingMovies();


    /*
    //fetch the data from TMBD API and updata the moviesSlice 
    const dispatch =useDispatch();

    const getNowPlayingMovis= async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json=await data.json();
        console.log(json.results);

        dispatch(addNowPlayingMovies(json.results));   //adding movies data to moviesSlice
    }
    useEffect(()=>{
        getNowPlayingMovis();
    },[]);
*/

    return(
        <div>
            <Header/>

            <MainContainer/>
            <SecondaryContainer/>
            </div>
    )
}
export default Browse;