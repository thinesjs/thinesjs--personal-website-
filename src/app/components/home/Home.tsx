import React from 'react'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-scroll";

const HomeSection = () => {
  return (
    <div className='pb-20 md:pt-0 h-screen w-full'>
      <div id='home' className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='sm:text-5xl font-bold text-4xl'>Hey, I&apos;m Thines {String.fromCodePoint(Number('0x1F44B'))}</h2>
          <p className='text-gray-800 py-4 max-w-md'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Etiam semper nec nulla at efficitur. Quisque at scelerisque magna. 
            Ut malesuada ex ligula, quis cursus mauris pretium et. 
            Donec nisi orci, pretium sit amet luctus vitae, vulputate non leo. 
            Nulla vestibulum porta consectetur. 
          </p>
          <div>
            <Link to={'projects'} smooth={'easeInOutCubic'} duration={500}>
              <button className='group text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer hover:scale-105 duration-100 bg-gradient-to-r from-cyan-500 to-blue-500'>
                Projects 
                <span className='ml-3 group-hover:scale-110 duration-300'>
                  <FontAwesomeIcon icon={faCircleArrowRight} bounce />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className='mx-auto w-2/3 md:w-2/4'>
          <img src={'/image.png'} alt={'image'} className='rounded-2xl m-6' />
        </div>
      </div>
    </div>
  )
}

export default HomeSection