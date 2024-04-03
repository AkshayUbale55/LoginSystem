import { useQuery } from '@tanstack/react-query'
import axios from "axios"

export const useCatfact = () => {

    const {data, isLoading,isError, refetch} = useQuery({queryKey:["fact"], queryFn: () => {
        return axios.get("https://catfact.ninja/fact").then((res)=> res.data)
      }
    })

    const RefecthingData = ()=>{
        alert("Data Refected!!")
        refetch()
    }


    return {data, isLoading, isError, RefecthingData}

}