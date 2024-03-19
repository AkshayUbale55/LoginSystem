import { useCatfact } from "../Hooks/useCatfact"
import { PersonalDetails } from "../component/PersonalDetails"


export const Catfact = () => {

    const { data, isLoading, isError, RefecthingData } = useCatfact()

    if (isLoading) {
        return <h2 className="mt-4 text-center">Loading....</h2>
    }

    if (isError) {
        return (<h4 className='mt-4 font-bold text-3xl text-center p-4 text-deep-purple-600'>Unable to fetch Data try again!!</h4>)
    }


    return (
        <>
            <div className="flex flex-col place-content-center items-center">
                <button className="text-white items-center bg-gradient-to-r w-max from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4" onClick={RefecthingData}>Get CatFact</button>
                <h4 className="mt-4 text-center">The Fact:- {data?.fact}</h4>
            </div>

            <div>
        <PersonalDetails
            name={"saipranay"}
            age={23}
            married = {false}
            gender = {"Male"}

        />
            </div>
        </>
    )
}