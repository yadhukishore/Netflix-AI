import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { BackGround } from "../utils/constants";

const Login = () => {
  const [isSiginInForm, setIsSiginInForm] = useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const toggleSignInForm = () => {
    setIsSiginInForm(!isSiginInForm);
  };
  const handleButtonClick = (e) => {
    //Validate form data

   if(isSiginInForm){
    const msg = checkValidData(email.current.value,password.current.value);
    setErrorMessage(msg);
    if(msg) return;
    //Sign In
    signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" ~ "+errorMessage);
  });

   }else{

    const msg = checkValidData(email.current.value,password.current.value,name.current.value);
    setErrorMessage(msg);
    if(msg) return;
    //Sign UP
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value,name.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+" ~ "+errorMessage);
  });
   }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src={BackGround}
          alt="BackGround"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="absolute w-full md:w-3/5 lg:w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-black bg-opacity-80 rounded-md">
        <h1 className="font-bold text-3xl py-4">
          {isSiginInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSiginInForm && (
          <input
          ref={name}
            type="text"
            required
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-md bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-md bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-md bg-gray-700"
        />
        <p className="text-red-500 font-bold mt-2 p-2" >{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-md"onClick={handleButtonClick}>
          {isSiginInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer " onClick={toggleSignInForm}>
          {isSiginInForm
            ? "New to Netflix? Sign UP Now!"
            : "Alredy Registerd? Sign In Back!!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
