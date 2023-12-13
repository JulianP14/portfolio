'use client'
/* import Link from "next/link" */
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            to: 'home',
            label: 'home'
        },
        {
            id: 2,
            to: 'about',
            label: 'about'
        },
        {
            id: 3,
            to: 'portfolio',
            label: 'portfolio'
        },
        {
            id: 4,
            to: 'experience',
            label: 'experience'
        },
        {
            id: 5,
            to: 'contact',
            label: 'contact'
        }
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black sticky top-0 z-10">
            <div>
                <h1 className="text-3xl lg:text-5xl font-signature ml-2">Julián Parera</h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, to, label }) => (
                    <li
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-300"
                        key={id}
                    >
                        <Link to={to} smooth duration={500}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer mr-4 p-1 z-10 text-gray-500 md:hidden rounded-lg hover:bg-white hover:rotate-180 duration-500"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({ id, to, label }) => (
                        <li
                            className="cursor-pointer capitalize my-6 text-4xl hover:text-white hover:scale-105 duration-300"
                            key={id}
                        >
                            <Link 
                                to={to} 
                                smooth duration={500} 
                                onClick={() => setNav(!nav)}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}