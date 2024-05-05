import React, { useEffect, useState } from 'react'
import SlideCard from './slideCard'

function Slider() {
    const [slides, setSlides] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(()=>{
        setSlides((prevSlides) => {
            const newSlides = [...prevSlides, <SlideCard key={prevSlides.length + 1}/>, <SlideCard key={prevSlides.length + 2}/>, <SlideCard key={prevSlides.length + 3}/>];
            return newSlides;
        })
    }, []);

    console.log(slides[currentIndex])
    
  return (
    <div className='w-11/12 md:w-4/5 m-auto overflow-hidden bg-black text-white'>
        <div className='bg-black w-11/12 md:w-4/5 m-auto'>
            <div className='flex w-full justify-between'>
                <SlideCard />
                <SlideCard />
                <SlideCard />
            </div>
        </div>
        <div className='w-full py-3 flex justify-center items-center gap-2'>
            <button className='w-1 h-1 rounded-full bg-gray-400 p-1'></button>
            <button className='w-1 h-1 rounded-full bg-gray-400 p-1'></button>
            <button className='w-1 h-1 rounded-full bg-red-400 p-1'></button>
            <button className='w-1 h-1 rounded-full bg-gray-400 p-1'></button>
            <button className='w-1 h-1 rounded-full bg-gray-400 p-1'></button>
        </div>
    </div>
  )
}

export default Slider
