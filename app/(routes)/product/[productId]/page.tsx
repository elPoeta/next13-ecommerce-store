import { getProduct } from '@/actions/get-product';
import { getProducts } from '@/actions/get-products';
import Container from '@/components/Container';
import Gallery from '@/components/product/Gallery';
import ProductList from '@/components/product/Products';
import { Product } from '@/types/storeModelTypes';
import React, { FC } from 'react'

interface ProductPageProps {
  params: {
    productId: string;
  }
}

const ProductPage: FC<ProductPageProps> = async ({ params }) => {

  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  })

  return (
    <div>
      <Container>
        <div className='px-4 py-10 sm:px-6 lg:px-8'>
          <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
            <Gallery images={product.images} />
            <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
              Info
            </div>
          </div>
          <hr className='mt-10' />
          <ProductList title='Suggested Products' items={suggestedProducts} />
        </div>
      </Container>
    </div>
  )
}

export default ProductPage