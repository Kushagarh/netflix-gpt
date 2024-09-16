
import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constants";
import { useDispatch} from "react-redux";
import { addTrailerVideo } from "../utilis/moviesSlice";

const useMovieTrailer=()=>{
      //fetch the trailer video and updating data in the store with trailer video data

      const dispatch=useDispatch();
  
      //fetch trailer  video
      const getMoviesVideo= async (movieId)=>{
        // const data =await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)

         const data =await fetch('https://api.themoviedb.org/3/movie/365177/videos?language=en-US', API_OPTIONS)
         const json = await data.json();
        //  console.log(json);
  
         const filterData=json.results.filter(video =>video.type="Trailer");
         const trailer= filterData.length ?filterData[0] : json.results[0];
        //  console.log(trailer);
      //    setTrailerId(trailer.key);
         dispatch(addTrailerVideo(trailer));
      }
      useEffect(()=>{
            getMoviesVideo();
      },[]);
}

export default useMovieTrailer;