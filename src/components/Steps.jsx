import React from 'react'

const Steps = () => {
  return (
    <div className='max-w-7xl mx-auto'>
            <div className='text-center my-10 space-y-2'>
                <h2 className='text-4xl font-bold'>Get Started In 3 Steps</h2>
                <p className='text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto p-4'>

                <div className='shadow-xl text-center space-y-4 rounded-2xl p-10 border relative'>
                    <div className='absolute top-6 right-6 bg-violet-600 text-white rounded-full w-8 h-8 flex justify-center items-center text-sm'>01</div>
                    <div className='flex justify-center items-center'>
                        <img className='rounded-full p-6 bg-violet-100 w-24 h-24' src='./assets/user.png' />
                    </div>
                    <h2 className='text-2xl font-semibold'>Create Account</h2>
                    <p className='text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>

                <div className='shadow-xl text-center space-y-4 rounded-2xl p-10 border relative'>
                    <div className='absolute top-6 right-6 bg-violet-600 text-white rounded-full w-8 h-8 flex justify-center items-center text-sm'>02</div>
                    <div className='flex justify-center items-center'>
                        <img className='rounded-full p-6 bg-violet-100 w-24 h-24' src='./assets/package.png' />
                    </div>
                    <h2 className='text-2xl font-semibold'>Choose Products</h2>
                    <p className='text-gray-500'>Browse our catalog and select the tools that fit your needs.</p>
                </div>

                <div className='shadow-xl text-center space-y-4 rounded-2xl p-10 border relative'>
                    <div className='absolute top-6 right-6 bg-violet-600 text-white rounded-full w-8 h-8 flex justify-center items-center text-sm'>03</div>
                    <div className='flex justify-center items-center'>
                        <img className='rounded-full p-6 bg-violet-100 w-24 h-24' src='./assets/rocket.png' />
                    </div>
                    <h2 className='text-2xl font-semibold'>Start Creating</h2>
                    <p className='text-gray-500'>Download and start using your premium tools immediately.</p>
                </div>

            </div>
        </div>
  )
}

export default Steps