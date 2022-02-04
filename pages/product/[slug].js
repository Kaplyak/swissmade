import Header from '../../components/common/header';
import Link from 'next/link';
import AddToCart from '../../components/ui/addToCart';
import CategoryCards from '../../components/ui/categories';
import { PrismaClient, Prisma } from '@prisma/client';
import Footer from '../../components/common/footer';

export default function ProductPage(props){

    function cartAdd(id) {
        console.log(id);
      }
    
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="container mx-auto pb-5">
                <h1 className="text-center text-4xl mb-4">{props.item.name}</h1>
                <div className="flex justify-center gap-5">
                    <div className="w-2/4 flex justify-center">
                        <img className="w-96" src={`${props.item.image}`} />
                    </div>
                    <div className="w-2/4 mt-5 flex justify-center">
                        <div className="w-2/3 flex items-center">
                            <p>{props.item.description}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-center w-2/4">
                        <p className="text-2xl">{props.item.price} CHF</p>
                    </div>
                    <div className="text-center w-2/4">
                        <AddToCart item={props.item} />
                    </div>
                </div>
            </main>
            <Footer />
            <div id="notice" className="hidden absolute right-2 bottom-2 bg-red-500 text-white rounded p-4">
                <p>Item added to cart!</p>
            </div>
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