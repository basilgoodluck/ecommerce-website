import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wish, setWish] = useState([]);

    const toggleWish = (item) => {
        setWish((prevList) => {
            const target = prevList.find((e) => e._id === item._id);
            // if(bool){
            // return [...prevList, item]

            return prevList.filter((item) => item._id !== target._id)

        })
    }

    return <WishlistContext.Provider
        value={{wish, toggleWish}}
    >
        {children}
    </WishlistContext.Provider>
} 

export const useWish = () => useContext(WishlistContext)