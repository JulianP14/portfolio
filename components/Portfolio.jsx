import Image from 'next/image'
import prestame from '../public/assets/portfolio/prestame.png'
import todolist from '../public/assets/portfolio/todolist.png'
import ecommerce from '../public/assets/portfolio/ecommercereact.png'
import crypfo from '../public/assets/portfolio/crypfo.png'
import inflationapp from '../public/assets/portfolio/inflationapp.png'
import melarebusco from '../public/assets/portfolio/melarebusco.png'
import Link from 'next/link'

const Portfolio = () => {

  const infoPortfolio = [
    {
      id: 1,
      src: melarebusco,
      descrip: 'Melarebusco',
      work: 'An interactive site with three pages which allow the user to calculate inflation rates (A) and taxes (C). It also displays USD exchange rates compared to the Argentine Peso (B).',
      link: 'https://melarebusco.vercel.app/',
      github: "https://github.com/JulianP14/melarebusco"
    },
    {
      id: 2,
      src: prestame,
      descrip: 'Loan Simulator Site',
      work: 'An interactive loan site simulator with multiple pages. The most important one allows the user to ask for a loan.',
      link: 'https://julianp14.github.io/loan-website-simulator/index.html',
      github: 'https://github.com/JulianP14/loan-website-simulator'
    },
    {
      id: 3,
      src: crypfo,
      descrip: 'Cryptos Price Site',
      work: "A website where you can see the top ten cryptocurrencies and their prices. It also allows the users to search for a specific cryptocurrency.",
      link: 'https://crypfo.vercel.app/',
      github: 'https://github.com/JulianP14/crypfo'
    },
    {
      id: 4,
      src: todolist,
      descrip: 'To-do List Site',
      work: 'A website where you can jot down future tasks and unfinished tasks. It utilizes localStorage, eliminating the need to worry about manually saving your content.',
      link: 'https://to-do-list-jp.vercel.app/',
      github: 'https://github.com/JulianP14/to-do-list'
    },
    {
      id: 6,
      src: ecommerce,
      descrip: 'Ecommerce with React',
      work: 'An ecommerce website created with CRA that uses Firebase as its DB. It successfully implements shopping functionality and a shopping cart feature. It provides a seamless shopping experience.',
      link: 'https://jpwatches-ecommerce.vercel.app/',
      github: 'https://github.com/JulianP14/react-ecommerce-jp'
    }
  ]

  return (
    <section name='portfolio' id='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto pt-5 pb-4 '>
      <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center mt-10'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </h2>
          <p className='py-6 '>
            Check out some of my work here:
          </p>
        </div>
        <div className='flex flex-col items-center gap-16 '>
          {infoPortfolio.map(({ id, src, descrip, work, link, github }) => (
            <div className='rounded-lg m-5 flex-col items-center justify-center w-full gap-4 shadow-[0_0_25px_0_rgba(175,175,175,.4)] max-w-md lg:flex lg:flex-row lg:max-w-[1000px]' key={id}>
              <div className=''>
                <Image
                  src={src}
                  alt={descrip}
                  width={500}
                  height={550}
                  className='rounded-t-lg lg:rounded-none lg:rounded-r-lg '
                />
              </div>
              <div className='flex flex-col items-center'>
                <div className='pt-2 max-w-lg flex flex-col items-center px-4 ' >
                  <h2 className='text-2xl py-2'>{descrip}</h2>
                  <p className=' text-center'>{work}</p>
                </div>
                <div className='flex items-center justify-center'>
                  <div className='flex'>
                    <Link href={github} target='_blank' className='m-4 px-2 py-1 flex items-center hover:scale-110 hover:text-black hover:cursor-pointer hover:bg-white duration-500 rounded-lg'>
                      <button className='text-gray-500 '>
                        Code
                      </button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-github ml-1"> 
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                      </svg>
                    </Link>
                  </div>
                  <div className='flex'>
                    <Link href={link} target='_blank' className='m-4 px-2 py-1 flex items-center gap-1 hover:scale-110 hover:text-black hover:cursor-pointer hover:bg-white duration-500 rounded-lg'>
                      <button className='text-gray-500 '>
                        Demo
                      </button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                    </Link>
                  </div>
                </div>


              </div>
            </div>
          ))}

        </div>
      </div>
    </section>

  )
}

export default Portfolio