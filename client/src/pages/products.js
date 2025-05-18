import { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom';
import ProductCard from "../components/productCard";
import LoadingSpinner from "../layouts/loader";
import ProductsData from '../api/productsData';
import { useQuery } from "@tanstack/react-query";

function Products() {

  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: ProductsData,
  });
    
    if (isLoading || !data) {
        return <LoadingSpinner />;
    }
    return (
        <div className=' w-11/12 lg:w-4/5 m-auto mt-[50px] mb-[50px] flex flex-col gap-11 pb-24 '>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-7 items-center'>
                    <div className={`relative w-1 h-6 md:h-10 before:absolute before:left-0 before:top-0 before:content-[''] before:bg-red-500 before:w-4 before:h-full before:rounded-sm`}></div>
                    <h1 className='font-semibold text-sm md:text-md text-red-600'>Our Products</h1>
                </div>
                <div className=''>
                    <h1 className='text-black text-xl md:text-2xl font-medium' style={{whiteSpace:'nowrap'}}>Explore Our Products</h1>
                </div>
                <div className="grid gap-x-5 gap-y-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}                          
                </div>          
            </div> 
        </div>
    );
}

export default Products;
