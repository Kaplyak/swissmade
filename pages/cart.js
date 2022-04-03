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

    const totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        totalPrice += Number(cart[i].price);
    }
    
    const cartItems = cart.map(item => {
        return(
            <div key={item.id} className="flex mb-2">
                <div className="relative w-16">
                    <Image src={item.image} layout='fill' objectFit='contain' />
                </div>
                <div>
                    <p>{item.name}</p>
                    <p className="font-bold">{item.price} CHF</p>
                </div>
            </div>
        )
    })
    
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="container mx-auto flex-grow">
                <h1 className="text-center mb-2">Your cart</h1>
                <div>
                    {cartItems}
                </div>
                <div className="text-center font-bold underline mb-10">
                    <p>Total: {totalPrice} CHF</p>
                    <button className="text-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-3">
                        Check out
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    )
}