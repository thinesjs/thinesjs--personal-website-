'use client';

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faEye } from '@fortawesome/free-solid-svg-icons'
import useSWR from 'swr'
import { Portfolio } from '@/app/interfaces/portfolio'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { times } from 'lodash'

const PortfolioSection = () => {
    const { data, error, isLoading } = useSWR<Portfolio[]>('https://api.tjs-server.com/v1/portfolio', (apiURL: string) => fetch(apiURL, {headers:{"x-api-key": "5!WuTjN!reV8VAv6b6ZU!QzC7XLoGaTpG4R1"}}).then(res => res.json()));
    return (
        <div id="projects" className='text-black w-full h-screen'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
                <div className="pb-8">
                    <p className='text-4xl font-bold inline'>Projects {String.fromCodePoint(Number('0x1F5A5'))}</p>
                    <p className='py-6'>Check out some of my personal projects!</p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                        {error && (
                            <p>An unknown error has occured while fetching data ;(</p>
                        )}
                        {isLoading && times(9, index => (
                            <div className="shadow-sm rounded-lg border-[1px]">
                                <Skeleton style={{ display: 'flex', minHeight: 150 }} height="100%" className='rounded-t-lg mx-auto w-fit border-b-[1px] md:w-fit'/>
                            </div>
                        ))}
                        {data && data?.map((item) => (
                            <div key={item.id} className="shadow-sm rounded-lg border-[1px]">
                                <img src={item.thumbnail} alt={'image'} className='rounded-t-lg mx-auto w-fit border-b-[1px] md:w-fit' />
                                <div className="flex items-center justify-center">
                                    <Link href={item.hyperlink}>
                                        <button className='group text-white text-sm w-fit px-4 m-3 py-2 my-2 m-2 rounded-md duration-200 hover:scale-105 bg-gradient-to-r from-gray-900 to-gray-700'>
                                            <FontAwesomeIcon icon={faCircleInfo} className='mr-2' />About
                                        </button>
                                    </Link>
                                    <Link href={item.hyperlink}>
                                        <button className='group text-white text-sm w-fit px-4 m-3 py-2 m-2 rounded-md duration-200 hover:scale-105 bg-gradient-to-r from-gray-900 to-gray-700'>
                                            <FontAwesomeIcon icon={faEye} className='mr-2' />Demo
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSection