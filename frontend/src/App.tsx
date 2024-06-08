import React, {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {DisplayDate} from "./components/DisplayDate";

function App() {
    // const [ data, setData ] = useState<string | null>(null)
    //
    // useEffect(() => {
    //   fetch('http://localhost:8000/api/data')
    //     .then((res) => res.json())
    //     .then((data) => setData(data.data))
    // }, []);
    return (
        <><p>おはよう</p><DisplayDate/></>
    )

}

export default App
