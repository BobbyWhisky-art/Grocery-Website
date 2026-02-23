import React from 'react'
import grocery from '../../assets/grocery.png'
import Button from '../Button/Button'


const Hero = () => {
    return (
        <section>
            <div className='max-w-[1400px] min-h-screen mx-auto px-10 md:flex-row flex-col flex items-center pt-25'>
                {/* Hero Content */}
                <div className='flex-1'>
                    <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Qauality</span>
                <h1 className='md:text-6xl/18 text-3xl/10 mt-4 font-bold'>Tasty Organic <br /><span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> <br />In Your City</h1>
                <p className='text-zinc-600 text-lg max-w-[530px] mt-5 mb-10'>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                <Button content="Shop Now"/>
                
                
                
                </div>

        
                {/* Hero image */}
                <div className='flex-1'>
                    <img src={grocery} alt='Hero Image' />
                </div>
            </div>
        </section>
    )
}

export default Hero
