import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            Self-motivated and hardworking fresher seeking for an opportunity to work in a challenging environment to prove my skills and utilize my knowledge and intelligence in the growth of the organization.<br/>
I have always been a great problem solver. I am familiar with a variety of programming languages, including C, C++, Python, JavaScript, Java and other technologies like HTML, CSS, SQL, MongoDB but I am always adding new skills to my repertoire.<br/>I am also eager to meet other software engineers in the area, so feel free to connect!
            </p>
        </div>
    </div>
  )
}

export default About