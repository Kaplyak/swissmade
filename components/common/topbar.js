import { useState, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Search from '../icons/search';
import SearchFunc from './searchfunc';
import ShoppingCart from '../icons/cart';
import UserCircle from '../icons/profile';

export default function Topbar() {
    const [cart, setCart] = useState([]);

    const [sidebar, setSidebar] = useState(false);

    useLayoutEffect(() => {
        if (sessionStorage.getItem('cart')) {
          setCart(JSON.parse(sessionStorage.getItem('cart')))
        } else {
          sessionStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    function mobileMenu () {
        const hamburger = document.querySelector(".hamburger");
    
        hamburger.classList.toggle("active");

        const sidebar = document.querySelector(".sidemenu")

        if (sidebar.classList.contains("flex")) {
            sidebar.classList.remove("flex");
            sidebar.classList.add("hidden");
            return;
        }

        if (sidebar.classList.contains("hidden")) {
            sidebar.classList.remove("hidden");
            sidebar.classList.add("flex");
            return;
        }

    }
    



    return (
        <div className="flex justify-between items-center">
            <div className="w-1/3">

            </div>
            <div className="w-1/3 text-center">
                <Link href="/">
                    <Image className="cursor-pointer" src="/swilogo.svg" alt="Swissmade Logo" width={180} height={180} />
                </Link>
            </div>
            <div className="hidden lg:flex justify-center items-center w-1/3 gap-x-3">
                <SearchFunc />
                <ShoppingCart />
                <UserCircle />
            </div>
            <div onClick={toggleSidebar} className={`${sidebar ? "active" : null} w-1/3 hamburger lg:hidden cursor-pointer z-20`}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className={`${sidebar ? null : "hidden"} sidemenu text-white flex flex-col pt-10 px-10 h-full bg-red-500 absolute top-0 right-0 z-10`}>
                <Link href="#">About</Link>
                <Link href="#">All products</Link>
                <Link href="#">On sale</Link>
                <Link href="#">Popular</Link>
                <Link href="#">New</Link>
                <Link href="#">Gift card</Link>
                <hr className="py-1" />
                <SearchFunc />
            </div>
        </div>
    )
}