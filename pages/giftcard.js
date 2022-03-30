import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Image from "next/image";

export default function About() {
    return(
        <>
            <Header />
            <main className="container mx-auto">
                <h1 className="text-center text-4xl">About SwissMade</h1>
                <p>SwissMade was made by me (Kevin Pernía) as a portfolio project to showcase a range of skill abilities.</p>
                <p>I built this project using the following tech stack:</p>
                <div className="flex justify-around items-center p-5 my-5 border rounded-md">
                    <div>
                        <Image src="/../public/icons/react.svg" width={80} height={80} />
                        <p className="text-center">React</p>
                    </div>
                    <div>
                        <Image src="/../public/icons/nextjs-icon.svg" width={80} height={80} />
                        <p className="text-center">Next.js</p>
                    </div>
                    <div>
                        <Image src="/../public/icons/postgresql.svg" width={80} height={80} />
                        <p className="text-center">PostgreSQL</p>
                    </div>
                    <div>
                        <Image src="/../public/icons/prisma.svg" width={80} height={80} />
                        <p className="text-center">Prisma</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
        
    )
}