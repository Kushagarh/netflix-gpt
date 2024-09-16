import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

import { useEffect } from "react";
import { addUser, removeUser } from "../utilis/userSlice";
import { LOGO, USER_AVTAR } from "../utilis/constants.js";

const Header=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const user=useSelector(store=> store.user);

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

    return(
        <div className="absolute w-screen px-6 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-40 " src={LOGO} alt=""></img>
        
         {user && <div className="flex p-2" >
          <img className="w-12 h-12" alt="Netflix Smile Profile Icon" src={USER_AVTAR} />
           <button className="font-bold text-white" onClick={handleSignOut}>Sign Out</button>
          </div>
          } 
        
        </div>
    )
}
export default Header;