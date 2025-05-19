import React, { createContext, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const API_URL = process.env.REACT_APP_API_URL;

  const { data: cart = [], isLoading, error } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
      }
      try {
        const response = await fetch(`${API_URL}/api/cart`, {
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
          throw new Error(`Failed to fetch cart: ${errorMsg}`);
        }
        return await response.json();
      } catch (error) {
        console.error("Cart fetch error:", error.message);
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
      }
    },
    enabled: !!localStorage.getItem("authToken"),
  });

  const addToCartMutation = useMutation({
    mutationFn: async ({ item, itemCount }) => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        const stored = localStorage.getItem("cart");
        let updatedCart = stored ? JSON.parse(stored) : [];
        const existingItem = updatedCart.find((cartItem) => cartItem.productId === item._id);
        if (existingItem) {
          updatedCart = updatedCart.map((cartItem) =>
            cartItem.productId === item._id
              ? { ...cartItem, quantity: cartItem.quantity + itemCount }
              : cartItem
          );
        } else {
          updatedCart.push({
            productId: item._id,
            quantity: itemCount,
            title: item.title,
            imageURL: item.imageURL,
            price: item.price,
            reviews: item.reviews,
            inStock: item.inStock,
            description: item.description,
          });
        }
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
      const existingItem = cart.find((cartItem) => cartItem.productId === item._id);
      let updatedCart;
      if (existingItem) {
        const response = await fetch(`${API_URL}/api/cart/${item._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ quantity: existingItem.quantity + itemCount }),
        });
        if (!response.ok) {
          const errorMsg = await response.text();
          if (response.status === 401) {
            localStorage.removeItem("authToken");
            localStorage.removeItem("userId");
            throw new Error("Unauthorized: Please log in again");
          }
          throw new Error(`Failed to update cart: ${errorMsg}`);
        }
        updatedCart = cart.map((cartItem) =>
          cartItem.productId === item._id
            ? { ...cartItem, quantity: cartItem.quantity + itemCount }
            : cartItem
        );
      } else {
        const response = await fetch(`${API_URL}/api/cart/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            productId: item._id,
            quantity: itemCount,
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
          throw new Error(`Failed to add to cart: ${errorMsg}`);
        }
        updatedCart = await response.json();
      }
      return updatedCart;
    },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(["cart"], updatedCart);
      if (!localStorage.getItem("authToken")) {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    },
    onError: (error) => {
      console.error("Add to cart error:", error.message);
      if (!localStorage.getItem("authToken")) {
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    },
  });

  const increaseQuantityMutation = useMutation({
    mutationFn: async (itemId) => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        const stored = localStorage.getItem("cart");
        let updatedCart = stored ? JSON.parse(stored) : [];
        const item = updatedCart.find((cartItem) => cartItem.productId === itemId);
        if (!item) throw new Error("Item not found in cart");
        updatedCart = updatedCart.map((cartItem) =>
          cartItem.productId === itemId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
      const item = cart.find((cartItem) => cartItem.productId === itemId);
      if (!item) throw new Error("Item not found in cart");
      const response = await fetch(`${API_URL}/api/cart/${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ quantity: item.quantity + 1 }),
      });
      if (!response.ok) {
        const errorMsg = await response.text();
        if (response.status === 401) {
          localStorage.removeItem("authToken");
          localStorage.removeItem("userId");
          throw new Error("Unauthorized: Please log in again");
        }
        throw new Error(`Failed to increase quantity: ${errorMsg}`);
      }
      return cart.map((cartItem) =>
        cartItem.productId === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
  },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(["cart"], updatedCart);
      if (!localStorage.getItem("authToken")) {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    },
    onError: (error) => {
      console.error("Increase quantity error:", error.message);
    },
  });

  const decreaseQuantityMutation = useMutation({
    mutationFn: async (itemId) => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        const stored = localStorage.getItem("cart");
        let updatedCart = stored ? JSON.parse(stored) : [];
        const item = updatedCart.find((cartItem) => cartItem.productId === itemId);
        if (!item) throw new Error("Item not found in cart");
        if (item.quantity <= 1) {
          updatedCart = updatedCart.filter((cartItem) => cartItem.productId !== itemId);
        } else {
          updatedCart = updatedCart.map((cartItem) =>
            cartItem.productId === itemId
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
        }
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
      const item = cart.find((cartItem) => cartItem.productId === itemId);
      if (!item) throw new Error("Item not found in cart");
      if (item.quantity <= 1) {
        const response = await fetch(`${API_URL}/api/cart/${itemId}`, {
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
        return cart.filter((cartItem) => cartItem.productId !== itemId);
      }
      const response = await fetch(`${API_URL}/api/cart/${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ quantity: item.quantity - 1 }),
      });
      if (!response.ok) {
        const errorMsg = await response.text();
        if (response.status === 401) {
          localStorage.removeItem("authToken");
          localStorage.removeItem("userId");
          throw new Error("Unauthorized: Please log in again");
        }
        throw new Error(`Failed to decrease quantity: ${errorMsg}`);
      }
      return cart.map((cartItem) =>
        cartItem.productId === itemId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(["cart"], updatedCart);
      if (!localStorage.getItem("authToken")) {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    },
    onError: (error) => {
      console.error("Decrease quantity error:", error.message);
    },
  });

  const removeFromCartMutation = useMutation({
    mutationFn: async (itemId) => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        const stored = localStorage.getItem("cart");
        let updatedCart = stored ? JSON.parse(stored) : [];
        updatedCart = updatedCart.filter((cartItem) => cartItem.productId !== itemId);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
      const item = cart.find((cartItem) => cartItem.productId === itemId);
      if (!item) throw new Error("Item not found in cart");
      const response = await fetch(`${API_URL}/api/cart/${itemId}`, {
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
      return cart.filter((cartItem) => cartItem.productId !== itemId);
    },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(["cart"], updatedCart);
      if (!localStorage.getItem("authToken")) {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    },
    onError: (error) => {
      console.error("Remove from cart error:", error.message);
    },
  });

  const clearCartMutation = useMutation({
    mutationFn: async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        localStorage.setItem("cart", JSON.stringify([]));
        return [];
      }
      const response = await fetch(`${API_URL}/api/cart/clear`, {
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
        throw new Error(`Failed to clear cart: ${errorMsg}`);
      }
      return [];
    },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData(["cart"], updatedCart);
      if (!localStorage.getItem("authToken")) {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    },
    onError: (error) => {
      console.error("Clear cart error:", error.message);
    },
  });

  const addToCart = (item, itemCount) => {
    addToCartMutation.mutate({ item, itemCount });
  };

  const increaseQuantity = (itemId) => {
    increaseQuantityMutation.mutate(itemId);
  };

  const decreaseQuantity = (itemId) => {
    decreaseQuantityMutation.mutate(itemId);
  };

  const removeFromCart = (itemId) => {
    removeFromCartMutation.mutate(itemId);
  };

  const clearCart = () => {
    clearCartMutation.mutate();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        isLoading,
        error,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);