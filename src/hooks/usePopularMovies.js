import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../utilis/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constants";


 

 const usePopularMovies=()=>{

     //fetch the data from TMBD API and updata the moviesSlice 
     const dispatch =useDispatch();

     const getPopularMovies= async ()=>{
         const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
         const json=await data.json();
        //  console.log(json.results);
 
         dispatch(addPopularMovies(json.results));   //adding movies data to moviesSlice
     }
     useEffect(()=>{
        getPopularMovies();
     },[]);

 }


 export default usePopularMovies;