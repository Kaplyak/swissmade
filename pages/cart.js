import { useState, useEffect, useLayoutEffect } from 'react';
import Header from '../components/common/header';
import CategoryCards from '../components/ui/categories';
import { PrismaClient, Prisma } from '@prisma/client';
import Footer from '../components/common/footer';

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
            <div className="flex">
                <img src={item.image} className="w-16" />
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