"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import logo from '../../../assets/logo.svg'
import rectangle from '../../../assets/Rectangle 1.svg'



const query = gql`
    query{
        brandsByCategory{
        id
        url
        category
        }
    }
`;

interface Response {
  brands: { id: number; url: string; category: string }[];
}

const  Brands = () => {
    const [count, setCount] = React.useState(0);
    const { data, error } = useQuery(query);
 
    const [selectedCategory, setSelectedCategory] = useState('');

    if (error) return <p>Error: {error.message}</p>;

    const brands = data?.brandsByCategory || []
    console.log('zzzzzzz',brands)

    const handleCategoryChange = (event:any) => {
        setSelectedCategory(event.target.value);
    };

    const filteredBrands = selectedCategory
        ? brands.filter((brand:any) => brand.category === selectedCategory)
        : brands;

    console.log(filteredBrands)
    return (
    <section className="section bg-white text-black py-16">
        <div className="container mx-auto">
        <div className="flex">
            <Image src={rectangle} alt='' width={30} height={30} className="" />
            <h2 className="font-inter text-20 mb-8">
                You’ll be in good company
            </h2>
        </div>
        

                <p className="font-inter text-[48px] font-semibold mb-12">
                Trusted by leading brands
                </p>

                <div>
        <label>Filter by Category:</label>
        <select onChange={handleCategoryChange} value={selectedCategory} className='mb-6'>
          <option value="">All</option>
            <option value="RETAIl">RETAIL</option>
            <option value="ELECTRONICS">ELECTRONICS</option>
            <option value="CLOTHING">CLOTHING</option>
            <option value="FUEL">FUEL</option>
            <option value="INSURANCE">INSURANCE</option>
         
        </select>
      </div>

                
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-5 gap-auto">
            {filteredBrands.map((brand: any) => (
            <div className="rounded" key={brand.id}>
                <div className="flex justify-center h-[32px]"> {/* Center the image horizontally */}
                <Image src={brand.url} alt='' width={100} height={100} className="w-[256px] h-auto mr-2"></Image>
                </div>
            </div>
            ))}
        </div>
</div>
        </div>
    </section>
    
  );
};

export  default Brands;
