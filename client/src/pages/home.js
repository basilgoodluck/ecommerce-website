import React, { useState, useEffect } from 'react';
import Hero from '../layouts/hero';
import FlashSales from '../layouts/flashSales';
import Categories from '../layouts/categories';
import BestSellingProducts from '../layouts/bestSellingProducts';
import OurProducts from '../layouts/ourProducts';
import NewArrivals from '../layouts/newArrivals';
import { useLoaderData } from 'react-router-dom';
import LoadingSpinner from '../layouts/loader';

export default function Home() {
  const data = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for rendering components
    if (data) {
      const timer = setTimeout(() => {
        setIsLoading(false); 
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [data]);

  if (isLoading || !data) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Hero />
      <FlashSales products={data} />
      <Categories />
      <BestSellingProducts products={data} />
      <OurProducts products={data} />
      <NewArrivals />
    </div>
  );
}