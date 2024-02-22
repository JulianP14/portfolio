'use client'
import Image from "next/image";
import me from "../public/assets/me2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
/* import Link from "next/link"; */
import { Link } from "react-scroll";

const Home = () => {
    return (
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg h-full mx-auto flex flex-col px-8 items-center justify-center gap-24 md:flex-row ">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              I'm a Frontend Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              I have been studying and practising Frontend development for more than a year. I love to work on web apps while I learn React, Next.Js and Tailwind.
            </p>

            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>

          <div>
            <Image
              src={me}
              height={250}
              width={300}
              alt="my profile"
              className="rounded-2xl mx-auto md:w-full"
            />
          </div>
        </div>
      </div>
    );
};

export default Home;