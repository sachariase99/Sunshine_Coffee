import React from 'react'

const Footer = () => {
  return (
    <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-32 py-8 gap-12 bg-[#1E1E1E] text-white'>
      <div className='font-inika text-[18px] w-[240px]'>
        <p className='mb-4'>Contact</p>
        <p>Supercoffeeroad 223b</p>
        <p>0223+ New Coffeland</p>
        <p>Phone: 22331122</p>
        <p>Mail: coffeeland@info.com</p>
      </div>
      <div className='font-inika text-[18px] w-[240px]'>
        <p className='mb-4'>Legal</p>
        <p>Cookie policy</p>
        <p>Return policy</p>
        <p>Shipping</p>
        <p>Terms and Conditions</p>
      </div>
      <div className='font-inika text-[18px] w-[240px]'>
        <p className='mb-4'>About</p>
        <p>History</p>
        <p>The people behind</p>
        <p>Partnerships</p>
        <p>International</p>
      </div>
    </footer>
  )
}

export default Footer
