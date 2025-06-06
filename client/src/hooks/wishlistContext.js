import React, { createContext, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const API_URL = process.env.REACT_APP_API_URL;

  const { data: wish = [], isLoading, error } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        const stored = localStorage.getItem("wishlist");
        return stored ? JSON.parse(stored) : [];
      }
      try {
        const response = await fetch(`${API_URL}/api/wishlist`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          const errorMsg = await response.text();
          if (response.status === 401) {
            localStorage.removeItem("authToken");
            localStorage.removeItem("userId");
            throw new Error("Unauthorized: Please log in again");
          }
          throw new Error(`Failed to fetch wishlist: ${errorMsg}`);
        }
        return await response.json();
      } catch (error) {
        console.error("Wishlist fetch error:", error.message);
        const stored = localStorage.getItem("wishlist");
        return stored ? JSON.parse(stored) : [];
      }
    },
    enabled: !!localStorage.getItem("authToken"),
  });

  const updateWishlistMutation = useMutation({
    mutationFn: async (item) => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        const stored = localStorage.getItem("wishlist");
        let updatedWishlist = stored ? JSON.parse(stored) : [];
        const exists = updatedWishlist.find((e) => e.productId === item._id);
        if (exists) {
          updatedWishlist = updatedWishlist.filter((e) => e.productId !== item._id);
        } else {
          updatedWishlist.push({
            productId: item._id,
            title: item.title,
            imageURL: item.imageURL,
            price: item.price,
            reviews: item.reviews,
            inStock: item.inStock,
            description: item.description,
          });
        }
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        return updatedWishlist;
      }
      const exists = wish.find((e) => e.productId === item._id);
      if (exists) {
        const response = await fetch(`${API_URL}/api/wishlist/${item._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          const errorMsg = await response.text();
          if (response.status === 401) {
            localStorage.removeItem("authToken");
            localStorage.removeItem("userId");
            throw new Error("Unauthorized: Please log in again");
          }
          throw new Error(`Failed to remove item: ${errorMsg}`);
        }
        return wish.filter((e) => e.productId !== item._id);
      } else {
        const response = await fetch(`${API_URL}/api/wishlist/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            productId: item._id,
            title: item.title,
            imageURL: item.imageURL,
            price: item.price,
            reviews: item.reviews,
            inStock: item.inStock,
            description: item.description,
          }),
        });
        if (!response.ok) {
          const errorMsg = await response.text();
          if (response.status === 401) {
            localStorage.removeItem("authToken");
            localStorage.removeItem("userId");
            throw new Error("Unauthorized: Please log in again");
          }
          throw new Error(`Failed to add item: ${errorMsg}`);
        }
        return await response.json();
      }
    },
    onSuccess: (newWishlist) => {
      queryClient.setQueryData(["wishlist"], newWishlist);
      if (!localStorage.getItem("authToken")) {
        localStorage.setItem("wishlist", JSON.stringify(newWishlist));
      }
    },
    onError: (error) => {
      console.error("Wishlist mutation error:", error.message);
      if (!localStorage.getItem("authToken")) {
        localStorage.setItem("wishlist", JSON.stringify(wish));
      }
    },
  });

  const toggleWish = (item) => {
    updateWishlistMutation.mutate(item);
  };

  return (
    <WishlistContext.Provider value={{ wish, toggleWish, isLoading, error }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWish = () => useContext(WishlistContext);