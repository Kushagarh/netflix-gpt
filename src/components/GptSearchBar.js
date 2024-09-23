import { useSelector } from "react-redux";
import lang from "../utilis/languageConstants";

const GptSearchBar=()=>{
  
    const langkey=useSelector(store=>store.config.lang);

    return (
        <div className="pt-[10%] flex justify-center">
            <form className=" w-1/2 bg-black grid grid-cols-12">
                
                <input className="p-4 m-4 col-span-9" 
                type="text"
                placeholder={lang[langkey].GptSearchPlaceholder}>
                </input>

                <button className="px-2 py-4 m-4 bg-red-700 rounded-lg text-white col-span-3">
                    {lang[langkey].search}
                    </button>

            </form>
        </div>
    )
}

export default GptSearchBar;