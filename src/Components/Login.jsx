import React from "react";
// import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import {
  provider,
  auth,
  signInWithPopup,
  GoogleAuthProvider,
} from "../store/firebaseAuth";
import { client } from "../client";

const Login = () => {
  // const responseGoogle = (response) => {
  //   console.log(response)
  // };
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        const { uid: id, photoURL: imageUrl, displayName: name } = user;

        const doc = { _id: id, _type: "user", userName: name, image: imageUrl };
        client.createIfNotExists(doc)
        .then( () => {
          navigate("/", {replace: true})
        } )
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode + " " + errorMessage);
      });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relatice w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} alt="logo" width="130px" />
          </div>
          <div className="shadow-2xl">
            <button
              onClick={signInWithGoogle}
              className="bg-mainColor rounded-lg cursor-pointer outline-none flex justify-center items-center py-3 px-4 text-md gap-2 hover:bg-slate-200"
            >
              <FcGoogle className="text-xl" /> Sign in with Google
            </button>
            {/* <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor rounded-lg cursor-pointer outline-none flex justify-center items-center py-3 px-4 text-md gap-2 hover:bg-slate-200"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="text-xl" />
                  <span>Sign in with Google</span>
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
