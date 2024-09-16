import { useDispatch } from "react-redux";
import {  addTopRatedMovies } from "../utilis/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constants";


 

 const useTopRatedMovies=()=>{

     //fetch the data from TMBD API and updata the moviesSlice 
     const dispatch =useDispatch();

     const getTopRatedMovies= async ()=>{
         const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
         const json=await data.json();
        //  console.log(json.results);
 
         dispatch(addTopRatedMovies(json.results));   //adding movies data to moviesSlice
     }
     useEffect(()=>{
        getTopRatedMovies();
     },[]);

 }


 export default useTopRatedMovies;