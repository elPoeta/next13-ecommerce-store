'use client'

import { Image as ImageType } from '@/types/storeModelTypes'
import { FC } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

interface GalleryProps {
  images: ImageType[];
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  return (
    <Tabs defaultValue={images?.[0]?.id} className="w-[400px]">

      {images.map(image => (
        <TabsContent key={image.id} value={image.id} className='overflow-hidden'>
          <Image
            src={image.url}
            width={200}
            height={200}
            priority={false}
            alt="Image"
            className='object-cover object-center'
          />
        </TabsContent>))}
      <TabsList className="h-[50px] overflow-hidden">
        {images.map(image => (
          <TabsTrigger key={image.id} value={image.id}>
            <Image
              src={image.url}
              width={50}
              height={50}
              priority={false}
              alt="Image"
              className='object-cover object-center'
            />
          </TabsTrigger>))}

      </TabsList>
    </Tabs>

  )
}

export default Gallery