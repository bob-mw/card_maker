import React, { createContext, useEffect, useState } from 'react';
import requirePage from '../services';

export const context = createContext();

export function Provider({ children }) {

const [srcImg, setSrcImg] = useState([]);

useEffect(() => {
    requirePage(setSrcImg);
},[]);

const values = {
    srcImg,
    setSrcImg
}

    return (
        <context.Provider value={ values }>
            { children }
        </context.Provider>
    );
}