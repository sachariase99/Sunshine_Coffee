import React from 'react'

const Testimonies = () => {
    return (
        <div>
            <h2 className='text-[128px] font-licorice text-center mt-4'>Testimonies</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mx-16 font-inika mb-32'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-bold'>John</h2>
                    <p className='max-w-[285px]'>“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-bold'>Eva</h2>
                    <p className='max-w-[285px]'>“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-bold'>Peter</h2>
                    <p className='max-w-[285px]'>“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-bold'>Michelle</h2>
                    <p className='max-w-[285px]'>“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonies
