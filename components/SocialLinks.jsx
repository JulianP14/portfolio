import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Link from "next/link"

const SocialLinks = () => {



    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                <Link
                    className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-500 hover:rounded-md"
                    href={'https://www.linkedin.com/in/julian-parera/'}
                    target="_blank"
                    rel="noreferrer"
                >
                    <li className="flex justify-between items-center w-full text-white">
                        LinkedIn <FaLinkedin size={30} />
                    </li>
                </Link>
                <Link
                    className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-500 hover:rounded-md"
                    href={'https://github.com/JulianP14'}
                    target="_blank"
                    rel="noreferrer"
                >
                    <li className="flex justify-between items-center w-full text-white">
                        Github <FaGithub size={30} />
                    </li>
                </Link>
                <Link
                    className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-500 hover:rounded-md"
                    href={'mailto:julian.parera@hotmail.com'}
                    rel="noreferrer"
                >
                    <li className="flex justify-between items-center w-full text-white">
                        Mail <HiOutlineMail size={30} />
                    </li>
                </Link>
                <Link
                    className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-500 rounded-br-md hover:rounded-md"
                    href={'/parera-julian-cv.pdf'}
                    rel="noreferrer"
                    download={true}
                    target="_blank"
                >
                    <li className="flex justify-between items-center w-full text-white">
                        Resume <BsFillPersonLinesFill size={30} />
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default SocialLinks