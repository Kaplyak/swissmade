import Link from "next/link"

export default function Navbar() {
    return (
        <nav className='font-bold hidden lg:flex justify-center gap-x-5 pb-5'>
            <Link href='#'>ON SALE</Link>
            <Link href='#'>POPULAR</Link>
            <Link href='#'>NEW</Link>
            <Link href='#'>GIFT CARD</Link>
            <Link href='/about'>ABOUT</Link>
            <Link href='/all'>ALL</Link>
        </nav>     
    )
}