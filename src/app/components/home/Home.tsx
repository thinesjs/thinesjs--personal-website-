/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa';
import useSWR, { Fetcher } from 'swr';
import Link from 'next/link';
import { useColorMode } from '@chakra-ui/react';

const HomeSection = () => {
  const { colorMode } = useColorMode()
  return (
    <div id='home' className='w-full'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='sm:text-5xl font-bold text-4xl'>Hey, I&apos;m Thines {String.fromCodePoint(Number('0x1F44B'))}</h2>
          <p className='py-4 max-w-md'>
            ...and i write codes.
          </p>
          <div>
            <Link href={'projects'}>
              <button className='group text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer hover:scale-105 duration-100 bg-gradient-to-r from-cyan-500 to-blue-500'>
                Projects 
                <span className='ml-3 group-hover:scale-110 duration-300'>
                <FaArrowCircleRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className='mx-auto w-2/3 md:w-2/4'>
          <img src={colorMode === "light" ? '/memoji.png' : '/memoji-dark.png'} alt={'image'} className='rounded-2xl m-6' />
        </div>
      </div>
    </div>
  )
}

export default HomeSection