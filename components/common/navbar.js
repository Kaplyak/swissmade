import Link from "next/link"

export default function Navbar() {
    return (
        <nav className='font-bold hidden lg:flex justify-center gap-x-5 pb-5'>
            <Link href='/about'>ON SALE</Link>
            <Link href='/about'>POPULAR</Link>
            <Link href='/about'>NEW</Link>
            <Link href='/about'>GIFT CARD</Link>
            <Link href='/about'>ABOUT</Link>
            <Link href='/about'>ALL</Link>
        </nav>     
    )
}