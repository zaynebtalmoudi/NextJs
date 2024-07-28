
import Link from "next/link";

export default function Header() {
    return (
    <div className="fixed xl:block w-full py-4 lg:px-0 px-5 z-[999] duration-300">
                <nav className="flex justify-between items-center max-w-6xl mx-auto px-2">
                    <div className="flex gap-4 items-center">
                        <div className="bg-primary text-white rounded-full size-10 text-xl grid place-items-center">
                            Z
                        </div>
                        <div>
                            <h4 className="font-bold text-lg uppercase">Zayneb</h4>
                            <p className="text-xs">Profile</p>
                        </div>
                    </div>
                    <ul className="gap-10 md:flex hidden hover:*:text-primary *:duration-200">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="about">About</Link>
                        </li>
                        <li>
                            <Link href="projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="contact">Contact</Link>
                        </li>
                        <li className="theme-switch">
                            <i className="fa-solid fa-circle-half-stroke cursor-pointer"></i>
                        </li> 
                    </ul>
                    <div className="flex items-center gap-6">
                       
                        <span className="theme-switch md:hidden">
                            <i className="fa-solid fa-circle-half-stroke cursor-pointer"></i>
                        </span>
                        <span id="menubar" className="cursor-pointer md:hidden text-xl">
                            <i className="fa-solid fa-bars"></i>
                        </span>
                    </div>
                </nav>
            </div>
         
    )
}

