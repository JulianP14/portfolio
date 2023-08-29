import Image from 'next/image'
import prestame from '../public/assets/portfolio/prestame.png'
import todolist from '../public/assets/portfolio/todolist.png'
import ecommerce from '../public/assets/portfolio/ecommercereact.png'
import crypfo from '../public/assets/portfolio/crypfo.png'
import inflationapp from '../public/assets/portfolio/inflationapp.png'
import Link from 'next/link'

const Portfolio = () => {

    const infoPortfolio = [
        {
            id: 1,
            src: prestame,
            descrip: 'Loan Simulator Site',
            work: 'An interactive loan site simulator with multiple pages, including one that fetches real-time data from an external API to display dollar exchange rates compared to the Argentine peso.',
            link: 'https://julianp14.github.io/loan-website-simulator/public/html/home.html',
            github: 'https://github.com/JulianP14/loan-website-simulator'
        },
        {
            id: 2,
            src: crypfo,
            descrip: 'Cryptos Price Site',
            work: "A website where you can see the top ten cryptocurrencies and their prices. It also allows the users to search for a specific cryptocurrency.",
            link: 'https://crypfo.vercel.app/',
            github: 'https://github.com/JulianP14/crypfo'
        },
        {
            id: 3,
            src: todolist,
            descrip: 'To-do List Site',
            work: 'A website where you can jot down future tasks and unfinished tasks. It utilizes localStorage, eliminating the need to worry about manually saving your content.',
            link: 'https://to-do-list-jp.vercel.app/',
            github: 'https://github.com/JulianP14/to-do-list'
        },
        {
            id: 4,
            src: inflationapp,
            descrip: 'Inflation App Site',
            work: 'A website where you can calculate what is best: buying a product in one payment or more according to the inflation rate.',
            link: 'https://inflation-app.vercel.app/',
            github: 'https://github.com/JulianP14/inflation-app'
        },
        {
            id: 5,
            src: ecommerce,
            descrip: 'Ecommerce with React',
            work: 'An ecommerce website created with CRA that uses Firebase as its DB. It successfully implements shopping functionality and a shopping cart feature. It provides a seamless shopping experience.',
            link: 'https://jpwatches-ecommerce.vercel.app/',
            github: 'https://github.com/JulianP14/react-ecommerce-jp'
        }
    ]

    return (
        <section name='portfolio' id='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto pt-5 pb-4 '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center mt-10'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Portfolio
                    </h2>
                    <p className='py-6 '>
                        Check out some of my work here:
                    </p>
                </div>

                <div className='grid  justify-items-center sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap10 px-12 sm:px-10 '>
                    {infoPortfolio.map(({ id, src, descrip, work, link, github }) => (
                        <div className='shadow-md shadow-gray-600 rounded-lg m-5 flex flex-col justify-between sm:max-w-md' key={id}>
                            <div className='flex flex-col items-center relative group'>
                                <Image
                                    src={src}
                                    alt={descrip}
                                    width={700}
                                    height={500}
                                    className='rounded-md duration-200 group-hover:opacity-30 max-h-96'
                                />

                                <div className='absolute top-0 w-[100%] h-[100%] opacity-0 group-hover:opacity-100 duration-200 p-8 flex flex-col items-center'>
                                    <h2 className='lg:text-2xl text-lg'>{descrip}</h2>
                                    <p className='lg:text-xl text-lg md:text-sm opacity-100 text-white'>{work}</p>
                                </div>
                            </div>

                            <div className='flex items-center justify-center group-hover:opacity-50  '>
                                <Link href={link} target='_blank' className='m-4'>
                                    <button className='p-2 rounded-lg text-gray-500 hover:scale-110 hover:text-black hover:cursor-pointer hover:bg-white duration-500'>
                                        Demo
                                    </button>
                                </Link>
                                <Link href={github} target='_blank'>
                                    <button className='p-2 rounded-lg text-gray-500 hover:scale-110 hover:text-black hover:cursor-pointer hover:bg-white duration-500'>
                                        Code
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>

    )
}

export default Portfolio