import React from "react";
import {useState} from "react";
import {useUser} from "../hooks/useUser";


export const UserProfile = () => {
    const { user, setUser } = useUser();
    const [name, setName] = useState(user.name);
    const [age, setAge] = useState(user.age);

    const handleClick = () => {
        setUser({ name, age });
    }
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
            <button onClick={handleClick}>Save</button>
        </div>
    );
}