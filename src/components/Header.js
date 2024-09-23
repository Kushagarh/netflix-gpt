import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

import { useEffect } from "react";
import { addUser, removeUser } from "../utilis/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVTAR } from "../utilis/constants.js";
import { toggleGptSearch } from "../utilis/gptSlice.js";
import { changeLanguage } from "../utilis/configSlice.js";

const Header=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const user=useSelector(store=> store.user);

    const showGptSearch=useSelector(store=> store.gpt.showGptSearch);

    const handleSignOut=()=>{
      
         signOut(auth).then(() => {
        // Sign-out successful.
       }).catch((error) => {
         // An error happened.
         navigate("/error")
       });
    }


    useEffect(()=>{
        
      const unsuscribe=  onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email , displayName,photoURL} = user;
            // .
            dispatch(addUser({uid:uid,email:email,displayName:displayName ,photoURL:photoURL}));
            navigate("/browse");
          } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
          }
        });
        
        //unsuscribe when component unbounce
        return ()=> unsuscribe();
    },[])

    const handleGptSearchClick=()=>{
        dispatch(toggleGptSearch())
    }


    const handleLanguageChange=(e)=>{
      // console.log(e.target.value)
        dispatch(changeLanguage(e.target.value))
    }

    return(
        <div className="absolute w-screen px-6 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-40 " src={LOGO} alt=""></img>
        
         {user &&
          <div className="flex p-2" >
           
           {showGptSearch && (
            <select className="p-2 m-2 rounded-lg bg-gray-900 text-white" onClick={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}

              {/* <option value="en">English</option> */}
            </select>
          )}

            <button className="py-2 px-4  mx-4 my-2 text-white bg-purple-700 rounded-lg"
            onClick={handleGptSearchClick}>
              {showGptSearch ? "Home Page" : "GPT Search"}
              </button>

          <img className="w-12 h-12" alt="Netflix Smile Profile Icon" src={USER_AVTAR} />
           <button className="font-bold text-white" onClick={handleSignOut}>Sign Out</button>
          </div>
          } 
        
        </div>
    )
}
export default Header;