import React from 'react'

const AboutSection = () => {
  return (
    <div id="about" className='pt-20 md:pt-0 w-full text-black h-screen'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className='text-4xl font-bold inline'>About {String.fromCodePoint(Number('0x1F331'))}</p>
                    <p className='py-6'>A little about me!</p>
                </div>
                <p className='text text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices consectetur velit non mattis. 
                    Nam luctus efficitur vestibulum. Nunc eu dui ornare, luctus nunc ut, vehicula enim. Ut scelerisque nunc vel dolor viverra placerat. 
                    Integer tincidunt nunc sed lectus vestibulum tincidunt. Fusce non velit ut arcu elementum scelerisque a ac ante. Aliquam erat volutpat.
                    Mauris facilisis velit eu ex scelerisque, non varius enim molestie. Nullam scelerisque, eros lobortis scelerisque tempor, 
                    nulla ipsum aliquam enim, a convallis velit sem a odio. Praesent aliquam vel diam vitae hendrerit. 
                </p>
                <br className='m-3'/>
                <p className='text text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices consectetur velit non mattis. 
                    Nam luctus efficitur vestibulum. Nunc eu dui ornare, luctus nunc ut, vehicula enim. Ut scelerisque nunc vel dolor viverra placerat. 
                    Integer tincidunt nunc sed lectus vestibulum tincidunt. Fusce non velit ut arcu elementum scelerisque a ac ante. Aliquam erat volutpat.
                    Mauris facilisis velit eu ex scelerisque, non varius enim molestie. Nullam scelerisque, eros lobortis scelerisque tempor, 
                    nulla ipsum aliquam enim, a convallis velit sem a odio. Praesent aliquam vel diam vitae hendrerit. 
                </p>
            </div>
        </div>
  )
}

export default AboutSection