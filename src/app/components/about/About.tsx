'use client';

import { About } from '@/app/interfaces/about';
import React from 'react'
import useSWR from 'swr';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AboutSection = () => {
    const { data, error, isLoading } = useSWR<About[]>('https://api.thinesjaishankar.com/v1/about', (apiURL: string) => fetch(apiURL, {headers:{"x-api-key": "5!WuTjN!reV8VAv6b6ZU!QzC7XLoGaTpG4R1"}}).then(res => res.json()));
    return (
        <div id="about" className='w-full'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <p className='text-4xl font-bold inline'>About {String.fromCodePoint(Number('0x1F331'))}</p>
                <p className='py-6'>A little about me!</p>
                {error && (
                   <p>A black hole has swallowed the contents that existed here once...</p>
                )}
                {isLoading && (
                    <Skeleton count={1} width="100%"/>
                )}
                {data && (
                    <p className='text'>
                        {data[0].text}
                    </p>
                )}
                
            </div>
        </div>
    )
}

export default AboutSection