import React from 'react'
import MyContext from '../Context/MyContext'
import { useState } from 'react';

const Wrapper = ({children}) => {
    const [name, setName] = useState("");

    return (
        <MyContext.Provider value={{name, setName}}>
            {children}
        </MyContext.Provider>
    )
}

export default Wrapper