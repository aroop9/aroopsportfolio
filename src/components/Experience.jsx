import React from 'react'
import cpp from '../assets/cpp.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import mysql from '../assets/mysql.png'
import mongodb from '../assets/mongodb.png'
import reactImage from '../assets/react.png'


const Experience = () => {
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>


                <div key={1} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500'>
                    <img src={cpp} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>C++</p>
                </div>
                <div key={2} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-red-500'>
                    <img src={java} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>Java</p>
                </div>
                <div key={3} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500'>
                    <img src={python} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>Python</p>
                </div>
                <div key={4} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500'>
                    <img src={html} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>HTML</p>
                </div>
                <div key={5} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500'>
                    <img src={css} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>Css</p>
                </div>
                <div key={6} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500'>
                    <img src={javascript} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>JavaScript</p>
                </div>
                <div key={7} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500'>
                    <img src={mysql} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>MySQL</p>
                </div>
                <div key={8} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-500'>
                    <img src={mongodb} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>MongoDB</p>
                </div>
                <div key={9} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500'>
                    <img src={reactImage} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>ReactJS</p>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Experience