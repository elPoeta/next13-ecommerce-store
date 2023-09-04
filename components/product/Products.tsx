import { Product } from '@/types/storeModelTypes';
import React, { FC } from 'react'
import NoResults from './NoResults';
import ProductCard from './ProductCard';

interface ProductListProps {
  title: string;
  items: Product[]
}
const ProductList: FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className='space-y-4'>
      <h3 className='font-bold text-3xl'>{title}</h3>
      {!items.length && <NoResults />}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {items.map((item: Product) => <ProductCard key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default ProductList