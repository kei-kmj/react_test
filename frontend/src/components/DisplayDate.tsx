import React from 'react'
import {useFetchDate} from '../hooks/useFetchDate'


export const DisplayDate = () => {
    const {data, loading} = useFetchDate()
    return (
        <div>
            {loading ? <p>loading...</p> : <p>{data}</p>}
        </div>
    )
}