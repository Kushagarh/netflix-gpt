import { BG_URL } from "../utilis/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch=()=>{
    return (
        <div>

            <div className="absolute -z-10">
              <img src={BG_URL} alt=""></img>
            </div>

            <GptSearchBar/>
            <GptMovieSuggestions/>


        </div>
    )
}

export default GptSearch;