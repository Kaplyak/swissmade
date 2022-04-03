import Header from '../../components/common/header';
import Link from 'next/link';
import AddToCart from '../../components/ui/addToCart';
import CategoryCards from '../../components/ui/categories';
import { PrismaClient, Prisma } from '@prisma/client';
import Footer from '../../components/common/footer';
import Image from 'next/image';

export default function ProductPage(props){

    function cartAdd(id) {
        console.log(id);
    }
    
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="container mx-auto pb-5">
                <h1 className="text-center text-4xl lg:mb-5 font-bold">{props.item.name}</h1>
                <div className="flex flex-col items-center lg:flex-row justify-center mb-5">
                    <div className="w-3/4 lg:w-2/4 flex justify-center">
                        <div className="w-96 h-96 relative">
                            <Image src={`${props.item.image}`} layout='fill' objectFit='contain' />
                        </div>
                    </div>
                    <div className="lg:w-2/4 lg:mt-5 flex justify-center">
                        <div className="w-2/3 flex items-center">
                            <p className='border-2 border-blue-200 rounded-md p-2 text-justify'>{props.item.description}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="text-center w-2/4 mb-2 lg:mb-0">
                        <p className="text-3xl font-karla400 font-bold underline">{props.item.price} CHF</p>
                    </div>
                    <div className="text-center w-2/4">
                        <AddToCart item={props.item} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export async function getStaticPaths() {

    const itemPaths = []

    for (let i = 1; i <= 39; i++) {
        let newslug = { params: { slug: i.toString() } }
        itemPaths.push(newslug);
    }

    return {
        paths: itemPaths,
        fallback: false
    };
}

const prisma = new PrismaClient()
export async function getStaticProps(context) {
  // fetch the data

    const rawItem = await prisma.item.findUnique({
        where: {
            id: Number(context.params.slug)
        },
        select: {
            id: true,
            name: true,
            description: true,
            image: true,
            price: true,
            category: true
        }
    });

    const item = {
        ...rawItem,
        price: rawItem.price.toNumber().toFixed(2)
    }


    /*
    const cleanedItem = items.map((item) => ({
        ...item,
        price: item.price.toNumber().toFixed(2)
      }));
    */

    return { props: { item } };
}