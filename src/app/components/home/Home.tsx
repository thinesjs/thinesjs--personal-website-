import React from 'react'
import Image from 'next/image'
import MainImage from '../../assets/image.png'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomeSection = () => {
  return (
    <div className='pt-24 md:pt-0 md:h-screen md:w-full'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='sm:text-5xl font-bold text-4xl'>Hey There!</h2>
          <p className='text-gray-800 py-4 max-w-md'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Etiam semper nec nulla at efficitur. Quisque at scelerisque magna. 
            Ut malesuada ex ligula, quis cursus mauris pretium et. 
            Donec nisi orci, pretium sit amet luctus vitae, vulputate non leo. 
            Nulla vestibulum porta consectetur. 
          </p>
          <div>
            <button className='group text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer hover:scale-105 duration-100 bg-gradient-to-r from-cyan-500 to-blue-500'>
              Projects 
              <span className='ml-3 group-hover:scale-110 duration-300'>
              <FontAwesomeIcon icon={faCircleArrowRight} />
              </span>
            </button>
          </div>
        </div>
        <div>
          <Image src={MainImage} alt={'image'} className='rounded-2xl mx-auto w-2/3 md:w-2/3' />
        </div>
      </div>
    </div>
  )
}

export default HomeSection