import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useWish } from "../hooks/wishlistContext";
import { useCart } from "../hooks/cartContext";
import ProductCard from "../components/productCard";
import LoadingSpinner from "../layouts/loader";

function WishList() {
  const { wish, isLoading: isWishLoading, error: wishError } = useWish();
  const { addToCart } = useCart();
  const queryClient = useQueryClient();
  const API_URL = process.env.REACT_APP_API_URL;

  // Fetch recommended products
  const { data: recommended = [], isLoading: isRecLoading, error: recError } = useQuery({
    queryKey: ["recommended"],
    queryFn: async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) throw new Error("No auth token found");
        const response = await fetch(`${API_URL}/api/recommended`, {
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
            throw new Error("Unauthorized: Please log in again");
          }
          throw new Error(`Failed to fetch recommended products: ${errorMsg}`);
        }
        return await response.json();
      } catch (error) {
        console.error("Recommended fetch error:", error.message);
        return [];
      }
    },
  });

  // Mutation for moving all items to cart
  const moveToCartMutation = useMutation({
    mutationFn: async () => {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("No auth token found");
      // Add each wishlist item to cart
      for (const item of wish) {
        await addToCart(item, 1); // Add with quantity 1
      }
      // Clear wishlist
      const response = await fetch(`${API_URL}/api/wishlist/clear-all`, {
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
          throw new Error("Unauthorized: Please log in again");
        }
        throw new Error(`Failed to clear wishlist: ${errorMsg}`);
      }
      return [];
    },
    onSuccess: (newWishlist) => {
      queryClient.setQueryData(["wishlist"], newWishlist);
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));
    },
    onError: (error) => {
      console.error("Move to cart error:", error.message);
      alert("Failed to move items to cart.");
    },
  });

  if (isWishLoading || isRecLoading) {
    return <LoadingSpinner />;
  }

  if (wishError || recError) {
    return <p className="text-red-500 text-center py-10">Failed to load wishlist or recommended products.</p>;
  }

  return (
    <div className="w-11/12 lg:w-4/5 m-auto mt-[50px] mb-[50px] flex flex-col gap-11 pb-24">
      <div className="flex flex-col gap-3">
        <div className="flex gap-7 items-center">
          <div className="relative w-1 h-6 md:h-10 before:absolute before:left-0 before:top-0 before:content-[''] before:bg-red-500 before:w-4 before:h-full before:rounded-sm"></div>
          <h1 className="font-semibold text-sm md:text-md text-red-600">Your Wishlist</h1>
        </div>
        <div className="flex gap-11 items-center justify-between">
          <h1 className="text-black text-xl md:text-2xl font-medium" style={{ whiteSpace: "nowrap" }}>
            Wishlist ({wish.length})
          </h1>
          <div>
            <button
              className="block text-black border border-gray-400 rounded-md py-2 px-5 hover:bg-gray-100 disabled:opacity-50"
              onClick={() => moveToCartMutation.mutate()}
              disabled={wish.length === 0 || moveToCartMutation.isLoading}
            >
              {moveToCartMutation.isLoading ? "Processing..." : "Move All to Cart"}
            </button>
          </div>
        </div>
        {wish.length === 0 ? (
          <p className="text-gray-500 text-center py-10">Your wishlist is empty.</p>
        ) : (
          <div className="grid gap-x-5 gap-y-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {wish.map((item) => (
              <ProductCard key={item.productId} product={item} />
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-7 items-center">
          <div className="relative w-1 h-6 md:h-10 before:absolute before:left-0 before:top-0 before:content-[''] before:bg-red-500 before:w-4 before:h-full before:rounded-sm"></div>
          <h1 className="font-semibold text-sm md:text-md text-red-600">Just for You</h1>
        </div>
        <div className="flex gap-11 items-center justify-between">
          <h1 className="text-black text-xl md:text-2xl font-medium" style={{ whiteSpace: "nowrap" }}>
            Recommended Products
          </h1>
          <div>
            <button className="block text-black border border-gray-400 rounded-md py-2 px-5 hover:bg-gray-100">
              View All
            </button>
          </div>
        </div>
        {recommended.length === 0 ? (
          <p className="text-gray-500 text-center py-10">No recommended products available.</p>
        ) : (
          <div className="grid gap-x-5 gap-y-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {recommended.map((item) => (
              <ProductCard key={item._id} product={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WishList;