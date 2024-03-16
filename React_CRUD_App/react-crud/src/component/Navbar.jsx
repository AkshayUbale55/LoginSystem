import { Link } from "react-router-dom"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"
import { useState } from "react"

export const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };
    const [user] = useAuthState(auth)
    const logOut = async () => {
        await signOut(auth)
        setDropdownVisible(false)
    }

    return (
        <div className="flex flex-row bg-purple-300">
            <div className="flex flex-row place-content-center space-x-6 p-6 font-bold m-auto w-auto">
                <Link to="/">Home</Link>
                {user && 
                <>
                    <Link to="/profile">Profile</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/catfact">Catfact</Link>
                    <Link to="/msdlink">MSDLink</Link>
                </>}
                {!user ? <Link to="/login">Login</Link> : <Link to="/createpost">Create Post</Link>}
            </div>
            {user && <div className="flex place-content-center w-auto items-center space-x-2 mr-3">
                <p className=" text-xl">{user?.displayName}</p>
                <img className="rounded-full" src={user?.photoURL || ""} width="50" height="30" alt="userprofile" onClick={toggleDropdown} />
                {dropdownVisible && (
                    <ul className="absolute top-8 right-0 bg-white border rounded shadow mt-2">
                        <li>
                            <button className="block px-4 py-2 text-gray-800" onClick={logOut}>
                                Logout
                            </button>
                        </li>
                        {/* Add more dropdown items as needed */}
                    </ul>
                )}
            </div>}
        </div>
    )
}