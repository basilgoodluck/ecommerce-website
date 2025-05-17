import React from 'react';
import Hero from '../layouts/hero';
import FlashSales from '../layouts/flashSales';
import Categories from '../layouts/categories';
import BestSellingProducts from '../layouts/bestSellingProducts';
import OurProducts from '../layouts/ourProducts';
import NewArrivals from '../layouts/newArrivals';
import LoadingSpinner from '../layouts/loader';
import { useQuery } from '@tanstack/react-query';
import ProductsData from '../api/productsData';

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: ProductsData,
    staleTime: 1000 * 60 * 5,
  });

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
