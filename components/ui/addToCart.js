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
        setCart(prevCart => [...prevCart, item]);
        
        document.getElementById('notice').classList.remove('hidden');
        function hide() {
            document.getElementById('notice').classList.add('hidden')
        }
        setTimeout(hide, 3000);
    }

    console.log(cart);


    return(
        <>
            <button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => cartAdd(props.item)}
            >
                Add to cart
            </button>
            <div id="notice" className="hidden absolute right-2 bottom-2 bg-red-500 text-white rounded p-4">
                <p>Item added to cart!</p>
            </div>
        </>
        
    )
}