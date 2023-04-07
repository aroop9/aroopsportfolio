import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li key={1} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 rounded-tr-md'}>
                <a href={"https://linkedin.com/in/aroop-ghosh-86a90119a"} className='flex justify-between items-center w-full text-white' target="_blank" rel="noreferrer">
                <>
                    LinkedIn<FaLinkedin size={30} />
                </>
                </a>
            </li>
            <li key={2} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'}>
                <a href={"https://github.com/aroop9"} className='flex justify-between items-center w-full text-white' target="_blank" rel="noreferrer">
                <>
                    GitHub<FaGithub size={30} />
                </>
                </a>
            </li>
            <li key={3} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'}>
                <a href={"mailto:aroopghosh553@gmail.com"} className='flex justify-between items-center w-full text-white' target="_blank" rel="noreferrer">
                <>
                    Mail<HiOutlineMail size={30} />
                </>
                </a>
            </li>
            <li key={4} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 rounded-br-md'}>
                <a href={"/resume.pdf"} className='flex justify-between items-center w-full text-white' download={true} target="_blank" rel="noreferrer">
                <>
                    Resume<BsFillPersonLinesFill size={30} />
                </>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks