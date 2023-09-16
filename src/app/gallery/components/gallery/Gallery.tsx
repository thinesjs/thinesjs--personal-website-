/* eslint-disable @next/next/no-img-element */
import React from 'react'
import useSWR, { Fetcher } from 'swr';
import { Galleryy } from '@/app/interfaces/gallery';
// import Gallery from 'react-photo-gallery';
import { times } from 'lodash'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './gallery.css';

const GallerySection = () => {
    const { data, error, isLoading } = useSWR<Galleryy[]>('https://api.thinesjaishankar.com/v1/gallery', (apiURL: string) => fetch(apiURL, {headers:{"x-api-key": "5!WuTjN!reV8VAv6b6ZU!QzC7XLoGaTpG4R1"}}).then(res => res.json()));

    return (
        <div id='gallery' className='w-full'>
            {/* <div className='max-w-screen xl:px-[200px] mx-auto flex flex-col justify-center'> */}
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <p className='text-4xl font-bold inline'>Gallery {String.fromCodePoint(Number('0x1F331'))}</p>
                <p className='py-6 text-semibold'>Checkout my gallery!</p>
                {error && (
                    <p>An unknown error has occured while fetching data.</p>
                )}
                <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {isLoading && times(12, index => (
                        <div className="shadow-sm rounded-lg">
                            <Skeleton style={{ display: 'flex', minHeight: 130, minWidth: 250 }} height="100%" width="100%" className='rounded-t-lg mx-auto w-fit md:w-fit'/>
                        </div>
                    ))}
                </div>
                 <div className="card-list mb-10">
                    {data && data?.map((item) => (
                        <div key={item.id} className="card hover:scale-105 duration-100">
                            <img
                                className="card--image"
                                alt={'image'}
                                src={item.image_url}
                                width="50%"
                                height="50%"
                            ></img>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default GallerySection