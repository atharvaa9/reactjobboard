import React from 'react'

const Hero = ({title ='React Jobs', description='Find a job'}) => {
    /* We can also destructure the props {title, description} instead of props.title and props.description*/
  return (
    <>
        <section className='bg-gray-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center'>
                <h1 className='text-4xl font-bold text-black mb-4 drop-shadow-lg'>
                    {title}
                </h1>
                <p className='text-indigo-500 text-center text-xl mb-4 opacity-90'>
                    {description}
                </p>
            </div>
        </section>
    </>
  )
}

export default Hero
