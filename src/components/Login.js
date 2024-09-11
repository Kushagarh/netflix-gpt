import { useState } from "react"
import Header from "./Header"

const Login=()=>{

     const [IsSignInForm,setIsSignInForm]=useState(true);

    const toggleSignInForm=()=>{
        setIsSignInForm(!IsSignInForm);
    }

    return(
        <div>
        <Header/>
        <div className="absolute">
            <img src="https://gtwallpaper.org/sites/default/files/wallpaper/246844/netflix-background-246844-2224599-6408439.png" alt=""></img>
        </div>

        <form className="absolute bg-black p-8 m-36 w-3/12 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-85">

        <h1 className="font-bold text-3xl py-3">{IsSignInForm ? "Sign In":"Sign Up"}</h1>

        {!IsSignInForm && (
                <input type="text" placeholder="Full Name" className="p-3 my-3 w-full bg-gray-700"></input>
                )}
        
            <input type="text" placeholder="Email Address" className="p-3 my-3 w-full bg-gray-700"></input>

            <input type="password" placeholder="Password" className="p-3 my-3 w-full bg-gray-700"></input>

            <button className="p-3 my-6 w-full bg-red-600 ">{IsSignInForm ? "Sign In":"Sign Up"}</button>

            <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>{IsSignInForm ? "New to Netflix? Sign Up Now.":"Already Registered! Sign In Now"}</p>
        </form>
        </div>
    )
}
export default Login;