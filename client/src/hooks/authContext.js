import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("authToken"));
  const queryClient = useQueryClient();
  const API_URL = process.env.REACT_APP_API_URL;

  const checkAuthStatus = useCallback(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    checkAuthStatus();

    const handleStorageChange = () => {
      checkAuthStatus();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [checkAuthStatus]);

  const login = async (credentials) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userId", data.userId); 
      setIsAuthenticated(true);

      const localCart = localStorage.getItem("cart");
      if (localCart) {
        const cartItems = JSON.parse(localCart);
        for (const item of cartItems) {
          await fetch(`${API_URL}/api/cart/add`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${data.token}`,
            },
            body: JSON.stringify({
              productId: item.productId,
              quantity: item.quantity,
              title: item.title,
              imageURL: item.imageURL,
              price: item.price,
              reviews: item.reviews,
              inStock: item.inStock,
              description: item.description,
            }),
          });
        }
        localStorage.removeItem("cart");
        queryClient.invalidateQueries(["cart"]);
      }

      const localWishlist = localStorage.getItem("wishlist");
      if (localWishlist) {
        const wishlistItems = JSON.parse(localWishlist);
        for (const item of wishlistItems) {
          await fetch(`${API_URL}/api/wishlist/add`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${data.token}`,
            },
            body: JSON.stringify({
              productId: item.productId,
              title: item.title,
              imageURL: item.imageURL,
              price: item.price,
              reviews: item.reviews,
              inStock: item.inStock,
              description: item.description,
            }),
          });
        }
        localStorage.removeItem("wishlist");
        queryClient.invalidateQueries(["wishlist"]);
      }

      return data;
    } catch (error) {
      console.error("Login error:", error.message);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("cart");
    localStorage.removeItem("wishlist");
    setIsAuthenticated(false);
    queryClient.setQueryData(["cart"], []);
    queryClient.setQueryData(["wishlist"], []);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);