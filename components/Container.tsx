import React, { FC } from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className='max-w-7xl mx-auto'>
      {children}
    </div>
  )
}

export default Container