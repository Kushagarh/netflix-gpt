import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utilis/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constants";


 

 const useNowPlayingMovies=()=>{

     //fetch the data from TMBD API and updata the moviesSlice 
     const dispatch =useDispatch();

     const getNowPlayingMovis= async ()=>{
         const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
         const json=await data.json();
        //  console.log(json.results);
 
         dispatch(addNowPlayingMovies(json.results));   //adding movies data to moviesSlice
     }
     useEffect(()=>{
         getNowPlayingMovis();
     },[]);

 }


 export default useNowPlayingMovies;