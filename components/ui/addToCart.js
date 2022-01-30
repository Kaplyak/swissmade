import { useState, useEffect, useLayoutEffect } from 'react';

export default function AddToCart(props) {
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

    function cartAdd(item) {
        console.log(item);
        setCart(prevCart => [...prevCart, item])
    }

    console.log(cart);


    return(
        <button 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => cartAdd(props.item)}
        >
            Add to cart
        </button>
    )
}