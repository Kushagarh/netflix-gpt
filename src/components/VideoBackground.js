// import { useEffect } from "react";
// import { API_OPTIONS } from "../utilis/constants";
import {  useSelector } from "react-redux";
// import { addTrailerVideo } from "../utilis/moviesSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground=({movieId})=>{
    
    //fetch the trailer video and updating data in the store with trailer video data 
    const trailerVideo=useSelector(store=>store.movies?.trailerVideo);

    useMovieTrailer(movieId);

    /*  
  // const [TrailerId,setTrailerId]=useState(null);
    const dispatch=useDispatch();

    //fetch trailer  video
    const getMoviesVideo= async ()=>{
       const data =await fetch('https://api.themoviedb.org/3/movie/365177/videos?language=en-US', API_OPTIONS)
       const json = await data.json();
       console.log(json);

       const filterData=json.results.filter(video =>video.type="Trailer");
       const trailer= filterData.length ?filterData[0] : json.results[0];
       console.log(trailer);
    //    setTrailerId(trailer.key);
       dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
          getMoviesVideo();
    },[]);
*/
    return (
        <div className=" w-screen">
          <iframe className="w-screen aspect-video"
             src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} 
             title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
               >
               </iframe>
        </div>
    )
}

export default VideoBackground;