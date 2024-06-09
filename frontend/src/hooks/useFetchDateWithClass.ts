import {useState, useEffect} from 'react'
import axios from "axios";
import {ApiClient} from "../utils/apiClient";

export const useFetchDateWithClass = () => {
    const [data, setData] = useState<string | null>(null)
    const [loading, setLoading] = useState(true);
    const apiClient = new ApiClient('http://localhost:8000')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiClient.getDate()
                setData(response.data.data + '!!!')
            } catch (e) {
                console.error(e)
            }
            setLoading(false)
        }
        fetchData()
    }, [])
    return {data, loading}
}