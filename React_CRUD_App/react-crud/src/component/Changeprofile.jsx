import { useState } from "react"
import { useContext } from 'react'
import { AppContext } from '../App'

export const Changeprofile = () => {

    const [newuserName, setNewuserName] = useState("")
    // console.log(newuserName)
    const {setUserName} = useContext(AppContext)

    return (
        <div className="m-auto">
            <input className="flex m-auto w-80 mt-9 rounded-md border-0 py-1.5 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6" onChange={(event) => setNewuserName(event.target.value) } />
            <button className="flex m-auto w-64 my-6 justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-voilet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-purple-500" onClick={() => setUserName(newuserName) }>Change Name</button>
        </div>
    )
}