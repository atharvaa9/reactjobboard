import React from 'react'

const Hero = ({title ='React Jobs', description='Find a job'}) => {
    /* We can also destructure the props {title, description} instead of props.title and props.description*/
  return (
    <>
        <section className='bg-indigo-700'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center'>
                <h1 className='text-4xl font-bold text-white mb-4'>
                    {title}
                </h1>
                <p className='text-white text-center text-xl mb-8'>
                    {description}
                </p>
            </div>
        </section>
    </>
  )
}

export default Hero
