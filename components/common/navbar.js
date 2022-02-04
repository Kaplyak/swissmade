import Link from "next/link"

export default function Navbar() {
    return (
        <nav className='flex justify-center gap-x-5 pb-5'>
            <Link href='#'>On Sale</Link>
            <Link href='#'>Popular</Link>
            <Link href='#'>New</Link>
            <Link href='#'>Gift card</Link>
            <Link href='/about'>About</Link>
            <Link href='/all'>All</Link>
        </nav>     
    )
}