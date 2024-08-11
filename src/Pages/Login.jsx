import { Link, useNavigate } from "react-router-dom";
import google from "../assets/google.svg";
import logo12 from "../assets/logo12.svg";

export const Login = () => {
    const Navigate = useNavigate()
    const url = window.location.href
    const port = url.split("/")[2]?.split(":")[1]
    const handleGoogleAuth = () => {
    window.location.href = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:${port}`;
  };
  
  localStorage.getItem('token') ? Navigate('/') : Navigate('/login')

  return (
    <>
      <div className="border-[#25262B] bg-black border-b-2 fixed text-white h-16 w-screen flex items-center justify-center">
      <div className="">
        <img
          src={logo12}
          alt="logo"
          className=" h-10"
        ></img>
      </div>
    </div>
      <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-[#111214] text-center space-y-10 px-16 rounded-2xl border border-[#343A40]">
          <div className="">
            <div className="text-xl font-semibold mt-6">
              Create a new account
            </div>
            <div
              className="mt-6 border-white/40 border px-20 py-2 text-sm  flex items-center text-[#CCCCCC] rounded-lg cursor-pointer"
              onClick={handleGoogleAuth}
            >
              <img src={google} alt="google" className="w-4 mr-3"></img>
              Sign Up with Google
            </div>
          </div>
          <div className="">
            <Link
              to="/login" 
              className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] mx-16 mt-5 px-6 text-sm py-3 rounded-md cursor-pointer"
            >
              Create an Account
            </Link>
            <div className="my-8 mb-10 text-[#909296]">
              Already have an account?{" "}
              <Link to="/signin" className="text-[#C1C2C5]">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#121212] flex justify-center items-center text-sm bottom-0 fixed w-screen h-8 text-[#5C5F66]">
        © 2023 Reachinbox. All rights reserved.   
      </div>
    </>
  );
}
