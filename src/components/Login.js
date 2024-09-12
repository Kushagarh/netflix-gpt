import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidate } from "../utilis/validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser} from "../utilis/userSlice";


const Login=()=>{
     const navigate=useNavigate();
     const dispatch=useDispatch();

     const [IsSignInForm,setIsSignInForm]=useState(true);
     const [errorMessage,setErrorMessage]=useState(null)
     
     const name=useRef(null);
     const email=useRef(null);
     const password=useRef(null);

    const toggleSignInForm=()=>{
        setIsSignInForm(!IsSignInForm);
    }

    const handleButtonClick=()=>{
        //validate form data
        
        // console.log(email.current.value)
        // console.log(password.current.value)

        const message = checkValidate(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return ;  //we don't want program to go ahead of this
        
        //create a new user SignIn /SignUp
        if(!IsSignInForm){     // we have taken this  Sign Up logic from firebase documentation
            //Sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
             .then((userCredential) => {
              // Signed up 
               const user = userCredential.user;

               updateProfile(user, {
                displayName: name.current.value, photoURL: "https://www.pinterest.com/pin/netflix-smileu-profile-icon-by-norbertsloth--950470696333873491/"
              }).then(() => {
                // Profile updated!
                const {uid,email , displayName,photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid,email:email,displayName:displayName ,photoURL:photoURL}));

                navigate("/browse")

              }).catch((error) => {
                // An error occurred
                // ...
                setErrorMessage(error.message);
              });

               console.log(user);
                // ...
               
              })
                .catch((error) => {
               const errorCode = error.code;
                  const errorMessage = error.message;
                 setErrorMessage(errorCode+"-"+errorMessage);
               });
        }
        else{
            //sign In logic
            signInWithEmailAndPassword(auth,  email.current.value,password.current.value)
             .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate("/browse")
             })
            .catch((error) => {
               const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode+"-"+errorMessage);
             });
        }
    }

    return(
        <div>
        <Header/>
        <div className="absolute">
            <img src="https://gtwallpaper.org/sites/default/files/wallpaper/246844/netflix-background-246844-2224599-6408439.png" alt=""></img>
        </div>

        <form onSubmit={(e)=> e.preventDefault()} //we don't want to submit the form 
        className="absolute bg-black p-8 m-36 w-3/12 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-85">

        <h1 className="font-bold text-3xl py-3">{IsSignInForm ? "Sign In":"Sign Up"}</h1>

        {!IsSignInForm && (
                <input ref={name} type="text" placeholder="Full Name" className="p-3 my-3 w-full bg-gray-700"></input>
                )}
        
            <input  ref={email}
            type="text" placeholder="Email Address" className="p-3 my-3 w-full bg-gray-700"></input>

            <input ref={password}
             type="password" placeholder="Password" className="p-3 my-3 w-full bg-gray-700"></input>

             <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>

            <button className="p-3 my-6 w-full bg-red-600 " onClick={handleButtonClick}>
                {IsSignInForm ? "Sign In":"Sign Up"}</button>

            <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>{IsSignInForm ? "New to Netflix? Sign Up Now.":"Already Registered! Sign In Now"}</p>
        </form>
        </div>
    )
}
export default Login;