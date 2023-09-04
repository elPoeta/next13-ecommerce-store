'use client'

import React, { FC, useEffect, useState } from 'react'

interface CurrencyProps {
  value: number
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Currency: FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) return null;

  return (
    <div className='font-semibold'>
      {formatter.format(value)}
    </div>
  )
}

export default Currency