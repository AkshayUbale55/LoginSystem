import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../component/store";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const [newuserName, setnewuserName] = useState("")
  const userName = useSelector((state) => state.user.value.username)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // below code works for google signin after login the window will redirect to home page
  const SignInWithGooglepopup = async () => {
    await signInWithPopup(auth,provider)
   navigate("/")
  }


  return (
    <div>
      <input
        onChange={(e) => { setnewuserName(e.target.value); }}
        placeholder="Enter Username"
        className="flex m-auto w-80 mt-9 rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
      />
      <button

        className="flex m-auto w-64 my-6 justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-voilet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-purple-500"
        onClick={() => (dispatch(login({ username: newuserName })))}
      >
        Login
      </button>
      <button

        className="flex m-auto w-64 my-6 justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-voilet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-purple-500"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
      <button
        aria-label="Continue with google"
        className="flex m-auto w-64 my-6 justify-center rounded-md bg-red-200 shadow-lg px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-voilet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-purple-500"
        onClick={SignInWithGooglepopup}
      >
        <p className="text-sm sm:text-base font-medium ml-2 sm:ml-4 text-white">
          Continue with Google
        </p>
      </button>
      <div className="m-auto text-center">
        The logged in user is: {userName}
      </div>
    </div>
  )
}