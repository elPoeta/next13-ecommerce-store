'use client'

import { Product } from '@/types/storeModelTypes'
import Image from 'next/image'
import React, { FC } from 'react'
import { Button } from '../ui/button'
import { Expand, ShoppingCart } from 'lucide-react'
import Currency from './Currency'

interface ProductCardProps {
  item: Product
}

const ProductCard: FC<ProductCardProps> = ({ item }) => {
  const { name, category, price, images } = item
  return (
    <div className='group cursor-pointer rounded-xl border p-3 spae-y-4'>
      <div className='aspect-square rounded-xl relative bg-gray-100'>
        <Image
          src={images?.[0]?.url}
          fill
          priority={false}
          alt={name}
          className='aspect-square rounded-md object-cover'
        />
        <div className='opacity-0 group-hover:opacity-100 transition w-full absolute px-6 bottom-5'>
          <div className='flex gap-x-6 justify-center'>
            <Button
              className='flex rounded-full items-center justify-center border shadow-md p-2 hover:scale-110 transition'
              size='icon'
              variant='default'
              onClick={() => { }}
            >
              <Expand size={20} className='text-secondary' />
            </Button>
            <Button
              className='flex rounded-full items-center justify-center border shadow-md p-2 hover:scale-110 transition'
              size='icon'
              variant='default'
              onClick={() => { }}
            >
              <ShoppingCart size={20} className='text-secondary' />
            </Button>
          </div>
        </div>
      </div>

      <div>
        <p className='font-semibold text-xl'>
          {name}
        </p>
        <p className='text-sm text-foreground'>
          {category.name}
        </p>
      </div>

      <div className='flex items-center justify-between'>
        <Currency value={price} />
      </div>
    </div>
  )
}

export default ProductCard