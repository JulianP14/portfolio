import React from 'react'
import html from '../public/assets/html.svg'
import css from '../public/assets/css.svg'
import javascript from '../public/assets/javascript.svg'
import react from '../public/assets/react.svg'
import nextjs from '../public/assets/nextjs.png'
import github from '../public/assets/github.png'
import tailwind from '../public/assets/tailwind.svg'
import sass from '../public/assets/sass.svg'
import bootstrap from '../public/assets/bootstrap.svg'
import Image from 'next/image'

const Experience = () => {

    const experienceInfo = [
        {
            id: 1,
            photo: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            photo: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 8,
            photo: sass,
            title: "SASS",
            style: "shadow-violet-500"
        },
        {
            id: 9,
            photo: bootstrap,
            title: "Bootstrap",
            style: "shadow-purple-500"
        },
        {
            id: 7,
            photo: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400"
        },
        {
            id: 3,
            photo: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            photo: react,
            title: "React",
            style: "shadow-blue-600"
        },
        {
            id: 5,
            photo: nextjs,
            title: "NextJs",
            style: "shadow-gray-700"
        },
        {
            id: 6,
            photo: github,
            title: "Github",
            style: "shadow-gray-400"
        },
    ]


    return (
        <section name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <h2 className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</h2>
                    <p className='py-6'>These are the technologies that I have been working with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {experienceInfo.map(({ id, photo, title, style }) => (
                        <div 
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} flex flex-col justify-center `} key={id}
                        >
                            <Image
                                src={photo}
                                alt={`${title} photo`}
                                width={120}
                                height={100}
                                className='w-20 mx-auto min-h-[70%]'
                            />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Experience