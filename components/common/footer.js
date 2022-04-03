import Image from "next/image"
import Instagram from "../icons/ig";
import Twitter from "../icons/tw";
import Facebook from "../icons/fb";
import Youtube from "../icons/yt";

export default function Footer() {
    return(
        <footer className="w-full bg-blue-200 text-dark text-center mt-auto">
            <div className="lg:flex justify-center content-center py-5 gap-x-20">
                <div>
                    <p className="text-lg">About</p>
                    <ul className="flex flex-col">
                        <li><a href="/about">Contact</a></li>
                        <li><a href="/about">Our story</a></li>
                        <li><a href="/about">Made in Switzerland</a></li>
                        <li><a href="/about">SwissMade VIP</a></li>
                    </ul>
                </div>
                <div>
                    <p className="text-lg">Help center</p>
                    <ul className="flex flex-col">
                        <li><a href="/about">Shipping</a></li>
                        <li><a href="/about">Refunds</a></li>
                        <li><a href="/about">FAQ</a></li>
                        <li><a href="/about">Payments</a></li>
                    </ul>  
                </div>
                <div className="flex flex-col">
                    <div className="text-center">
                        <Image src="/swilogo.svg" alt="Vercel Logo" width={90} height={90} />
                    </div>
                    <div className="flex justify-center gap-x-5">
                        <a href="/about"><Instagram /></a>
                        <a href="/about"><Twitter /></a>
                        <a href="/about"><Facebook /></a>
                        <a href="/about"><Youtube /></a>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <small>Made by <a href="https://github.com/Kaplyak">Kevin Pernía</a> as a portfolio project.</small>
            </div>
        </footer>
    )
}