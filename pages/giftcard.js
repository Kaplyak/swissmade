import Header from "../components/common/header"
import Footer from "../components/common/footer"

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
                        <img className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
                        <p className="text-center">React</p>
                    </div>
                    <div>
                        <img className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" />
                        <p className="text-center">Next.js</p>
                    </div>
                    <div>
                        <img className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" />
                        <p className="text-center">PostgreSQL</p>
                    </div>
                    <div>
                        <img className="w-20" src="https://raw.githubusercontent.com/prisma/presskit/main/Logos/Logo%20Black.svg" />
                        <p className="text-center">Prisma</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
        
    )
}