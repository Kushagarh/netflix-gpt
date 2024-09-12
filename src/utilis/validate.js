export const checkValidate=(email,password)=>{
    const isEmailValid = /[a-z0-9._%+!$&*=^|~#%'`?{}/-]+@([a-z0-9-]+\.){1,}([a-z]{2,16})/.test(email);

    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

    // const isNameValid=/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name);

    // if(!isNameValid) return "Name not valid"
    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password not valid";
    

    return null;  //means no errors
}