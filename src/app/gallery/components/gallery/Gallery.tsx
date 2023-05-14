/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-scroll";
import useSWR, { Fetcher } from 'swr';
import { Galleryy } from '@/app/interfaces/gallery';
import Gallery from 'react-photo-gallery';
import { times } from 'lodash'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './gallery.css';

const GallerySection = () => {
    const { data, error, isLoading } = useSWR<Galleryy[]>('https://api.tjs-server.com/v1/gallery', (apiURL: string) => fetch(apiURL, {headers:{"x-api-key": "5!WuTjN!reV8VAv6b6ZU!QzC7XLoGaTpG4R1"}}).then(res => res.json()));

    return (
        <div id='gallery' className='w-full text-black h-screen'>
            <div className='max-w-screen xl:px-[200px] mx-auto flex flex-col justify-center'>
                {error && (
                    <p>An unknown error has occured while fetching data ;(</p>
                )}
                <div className="mt-20 grid sm:grid-cols-3 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {isLoading && times(6, index => (
                        
                            <div className="shadow-sm rounded-lg border-[1px]">
                                <Skeleton style={{ display: 'flex', minHeight: 150 }} height="100%" className='rounded-t-lg mx-auto w-fit border-b-[1px] md:w-fit'/>
                            </div>
                        
                    ))}
                </div>
                 <div className="card-list mb-10">
                    {data && data?.map((item) => (
                        <div key={item.id} className="card">
                            <img
                                className="card--image"
                                alt={'Rate Limit Error'}
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