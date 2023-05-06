import { About } from '@/app/interfaces/about';
import React from 'react'
import useSWR from 'swr';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { times } from 'lodash'

const AboutSection = () => {
    const { data, error, isLoading } = useSWR<About[]>('http://api.tjs-server.com/v1/about', (apiURL: string) => fetch(apiURL, {headers:{"x-api-key": "5!WuTjN!reV8VAv6b6ZU!QzC7XLoGaTpG4R1"}}).then(res => res.json()));
    return (
        <div id="about" className='w-full text-black h-screen'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className='text-4xl font-bold inline'>About {String.fromCodePoint(Number('0x1F331'))}</p>
                    <p className='py-6'>A little about me!</p>
                </div>
                {error && (
                    <p>An unknown error has occured while fetching data ;(</p>
                )}
                {isLoading && (
                    <Skeleton count={9} />
                )}
                {data && (
                    <p className='text text-justify'>
                        {data[0].text}
                    </p>
                )}
                
            </div>
        </div>
    )
}

export default AboutSection