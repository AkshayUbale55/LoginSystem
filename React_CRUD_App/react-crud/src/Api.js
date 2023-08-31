import Axios from "axios"
import { useEffect, useState } from "react";

function Api() {

    const [joke, setJoke] = useState({})

    const FetchJoke = () => {
        Axios.get("https://official-joke-api.appspot.com/random_joke").then((res) => {
            // console.log(res.data)
            setJoke(res.data)
        })
    }

    useEffect(() => {
        FetchJoke()
    }, [])


    return (
        <div className="flex flex-col items-center m-auto">
            <button type="button" class=" text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={FetchJoke}>Get joke</button>
            {/* <img src={joke} width={400} height={400} alt="dog_image"></img> */}
            <h4>type :- {joke.type}</h4>
            <h4>setup :- {joke.setup}</h4>
            <h4>punchline :- {joke.punchline}</h4>

        </div>
    )
}

export default Api;