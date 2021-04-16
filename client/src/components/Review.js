import React from 'react'
import Slideshow from './Slideshow'
export default function Review() {
    return (
        <div className="static min-h-screen p-5 flex items-start flex-col justify-start bg-none 
        px-4 sm:px-6 lg:px-8 dark:bg-gray-900 dark:text-white">
            <div className="w-12/12 mt-20 float-left">
                <h1 className="text-indigo-600 font-extrabold text-5xl">5633 Melendy Dr</h1>
                <p className="mt-2 text-indigo-600 font-extrabold text-1xl">Langley, Washington</p>
            </div>
            <div>
            <Slideshow/>
            </div>
        
        </div>
    )
}
