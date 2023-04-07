import React from 'react'
import chat from '../assets/portfolio/chat.png'
import dijkstra from '../assets/portfolio/dijkstra.png'
import myBlog from '../assets/portfolio/myBlog.png'
import portfolio from '../assets/portfolio/portfolio.png'
import sorting from '../assets/portfolio/sorting.png'


const Portfolio = () => {
  
    const openInNewTab = (url) => {
      window.open(url, "_blank", "noreferrer");
    };

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here!</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

        
          <div key={1} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={sorting} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button onClick={()=>openInNewTab("https://visualize-it.netlify.app/")} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button onClick={()=>openInNewTab("https://github.com/aroop9/Let-s_VisualizeIt_/tree/main/VisualizeIt")} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>
        
        
          <div key={2} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={dijkstra} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button onClick={()=>openInNewTab("https://dijkstras-algorithm-visualizer.netlify.app/")} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button onClick={()=>openInNewTab("https://github.com/aroop9/Dijkstra-path-visualizer")} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>
      
        
          <div key={3} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={portfolio} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button onClick={()=>openInNewTab("https://aroops-portfolio.netlify.app/")} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button onClick={()=>openInNewTab("https://github.com/aroop9/aroopsportfolio")} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>
        
        
          <div key={4} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={chat} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button onClick={()=>openInNewTab("https://github.com/aroop9/TextIt")} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>
        
        
          <div key={5} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={myBlog} alt="" className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <button onClick={()=>openInNewTab("https://github.com/aroop9/MyBlog-BlogApp-")} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>
          
        </div>


      </div>
    </div>
  )
}

export default Portfolio