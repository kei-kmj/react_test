import React, {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {DisplayDate} from "./components/DisplayDate";
import {UserProvider} from "./hooks/useMultiLevelDropdown";
import {UserProfile} from "./components/UserProfile";

function App() {

    return (
        <><p>おはよう</p><DisplayDate/>
            <UserProvider>
                <UserProfile/>
            </UserProvider></>
    )

}

export default App
