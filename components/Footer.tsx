import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='border-t'>
      <div className='mx-auto py-10'>
        <p className='text-xs text-center'>
          &copy; {year} Amaclon, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer