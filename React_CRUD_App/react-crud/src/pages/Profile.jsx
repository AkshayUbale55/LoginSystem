import React from 'react'
import { Changeprofile } from '../component/Changeprofile'
import { useContext } from 'react'
import { AppContext } from '../App'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"

export const Profile = () => {
  const {userName} = useContext(AppContext)

  // useQuery function to fetch data from api and store it in data variable
  // isloading, isError and  refetch are the inbuild methods of react-query
  const {data, isLoading,isError, refetch} = useQuery({queryKey:["punchline","setup"], queryFn: () => {
    return axios.get("https://official-joke-api.appspot.com/random_joke").then((res)=> res.data)
  }
})
  // console.log(userName)
  // console.log(data)
  
  if(isLoading) {
    return (<div className='m-auto font-bold text-3xl text-center p-4 text-deep-purple-600'>
        Wait a While....we are loading your data!!
    </div>
  )}

  if(isError) {
    return (
      <div className='m-auto font-bold text-3xl text-center p-4 text-deep-purple-600'>
       Sorry for the inconvenice...there is an error while loading!!
    </div>
  )}


  return (
    <>
    <div className='m-auto font-bold text-3xl text-center p-4 text-deep-purple-600'> The profile belongs to the : {userName}
    <Changeprofile  />
    </div>
    <div className='flex place-content-center m-auto'>
    <button type="button" className=" text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4" onClick={refetch}>Get joke</button>
    </div>
    <div className='m-auto font-bold text-3xl text-center p-4 text-deep-purple-600'>
    <p>The Setup :{data?.setup}</p>
      <p>Punchline : {data?.punchline}</p>
    </div>
    </>
  )
}

