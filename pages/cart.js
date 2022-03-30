import { useState, useEffect, useLayoutEffect } from 'react';
import Header from '../components/common/header';
import CategoryCards from '../components/ui/categories';
import { PrismaClient, Prisma } from '@prisma/client';
import Footer from '../components/common/footer';
import Image from 'next/image';

export default function Cart() {
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

    
    const cartItems = cart.map(item => {
        return(
            <div key={item.id} className="flex">
                <div className="relative w-16">
                    <Image src={item.image} layout='fill' objectFit='contain' />
                </div>
                <div>
                    <p>{item.name}</p>
                    <p>{item.price} CHF</p>
                </div>
            </div>
        )
    })
    
    return(
        <div>
            <Header />
            <main className="container mx-auto">
                <h1 className="text-center">Your cart</h1>
                <div>
                    {cartItems}
                </div>
            </main>
            <Footer />
        </div>
    )
}