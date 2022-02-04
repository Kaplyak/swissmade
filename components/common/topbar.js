import { useState, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Search from '../icons/search';
import SearchFunc from './searchfunc';
import ShoppingCart from '../icons/cart';
import UserCircle from '../icons/profile';

export default function Topbar() {
    const [cart, setCart] = useState([]);

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


    return (
        <div className="flex justify-between">
            <div className="w-1/3">
                
            </div>
            <div className="w-1/3 text-center">
                <Link href="/">
                    <Image className="cursor-pointer" src="/swilogo.svg" alt="Vercel Logo" width={180} height={180} />
                </Link>
            </div>
            <div className="flex justify-center items-center w-1/3 gap-x-3">
                <SearchFunc />
                <ShoppingCart />
                <a href="#"><UserCircle /></a>
            </div>
        </div>
    )
}