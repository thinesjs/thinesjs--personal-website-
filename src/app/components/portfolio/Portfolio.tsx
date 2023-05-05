import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faEye } from '@fortawesome/free-solid-svg-icons'

const PortfolioSection = () => {
    const portfolioItems = [{id: 1, item: '/valortracker.png'}, {id: 2, item: '/valortracker.png'}, {id: 3, item: '/valortracker.png'}]
    return (
        <div id="projects" className='pt-20 md:pt-0 w-full text-black h-screen'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className='text-4xl font-bold inline'>Projects {String.fromCodePoint(Number('0x1F5A5'))}</p>
                    <p className='py-6'>Check out some of my personal projects!</p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                        {portfolioItems.map(({id, item}) => (
                            <div key={id} className="shadow-sm rounded-lg border-[1px]">
                                <img src={item} alt={'image'} className='rounded-t-lg mx-auto w-fit border-b-[1px] md:w-fit ' />
                                <div className="flex items-center justify-center">
                                    <button className='group text-white text-sm w-1/2 py-2 my-2 m-4 rounded-md duration-200 hover:scale-105 bg-gradient-to-r from-gray-900 to-gray-700'>
                                        About
                                        <span className='ml-3 group-hover:scale-110 duration-300'>
                                            <FontAwesomeIcon icon={faCircleInfo} />
                                        </span>
                                    </button>
                                    <button className='group text-white text-sm w-1/2 py-2 m-4 rounded-md duration-200 hover:scale-105 bg-gradient-to-r from-gray-900 to-gray-700'>
                                        Demo
                                        <span className='ml-3 group-hover:scale-110 duration-300'>
                                            <FontAwesomeIcon icon={faEye} />
                                        </span>
                                    </button>
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