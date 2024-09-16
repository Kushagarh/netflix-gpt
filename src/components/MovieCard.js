import { IMG_CDN_URL } from "../utilis/constants";


const MovieCard=({posterPath})=>{
    return (
        <div className="w-40 pr-4" >
            <img alt="Movie Card" src={IMG_CDN_URL+posterPath}></img>
        </div>
    )
}
export default MovieCard;