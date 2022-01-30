import Link from 'next/link';
import Image from 'next/image';
import Search from '../icons/search';
import ShoppingCart from '../icons/cart';
import UserCircle from '../icons/profile';

export default function Topbar() {
    return (
        <div className="flex justify-between">
            <div className="w-1/3">

            </div>
            <div className="w-1/3 text-center">
                <Link href="/">
                    <Image src="/swilogo.svg" alt="Vercel Logo" width={180} height={180} />
                </Link>
            </div>
            <div className="flex justify-center items-center w-1/3 gap-x-3">
                <a href="#"><Search /></a>
                <a href="#"><ShoppingCart /></a>
                <a href="#"><UserCircle /></a>
            </div>
        </div>
    )
}