import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Image from "next/image";

export default function About() {
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="container mx-auto flex-grow">
                <h1>All items</h1>
            </main>
            <Footer />
        </div>
        
    )
}