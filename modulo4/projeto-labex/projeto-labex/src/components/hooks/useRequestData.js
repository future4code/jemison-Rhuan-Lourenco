import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../constants/constants";

export function useRequestData(url) {

    const [data, setData] = useState({})
    const [isLoading, setisLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setisLoading(true)
        axios.get(`${baseUrl}${url}`)
        .then((response) => {
            setisLoading(false)
            setData(response.data)
        })
        .catch((error) => {
            setisLoading(false)
            console.log(error)
            setError(error)
        })
    }, [url])

    return [data, isLoading, error]
}