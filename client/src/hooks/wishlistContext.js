import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wish, setWish] = useState(() => {
        const stored = localStorage.getItem("wishlist");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wish));
    }, [wish]);
    const toggleWish = (item) => {
        setWish((prevList) => {
            const exists = prevList.find((e) => e._id === item._id);
            if (exists) {
                return prevList.filter((e) => e._id !== item._id);
            } else {
                return [...prevList, item];
            }
        });
    };
    return (
        <WishlistContext.Provider value={{ wish, toggleWish }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWish = () => useContext(WishlistContext);
