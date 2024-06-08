import {useState, useEffect} from 'react'

export const useFetchDate = () => {
    const [data, setData] = useState<string | null>(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:8000/api/data')
                const data = await res.json()
                setData(data.data + '!!!')
            } catch (e) {
                console.error(e)
            }
            setLoading(false)
        }
        fetchData()
    }, [])
    return {data, loading}
}