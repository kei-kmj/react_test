import {useState, useEffect} from 'react'
import axios from "axios";

export const useFetchDateWithAxios = () => {
    const [data, setData] = useState<string | null>(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/data')
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