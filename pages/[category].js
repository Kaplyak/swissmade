import { PrismaClient, Prisma } from '@prisma/client';
import Header from '../components/common/header';
import CategoryCards from '../components/ui/categories';
import ProductCard from '../components/ui/productCard';
import Footer from '../components/common/footer';

export default function Category(props) {

    const itemsData = props.cleanedItems;

    const itemList = itemsData.map(item => {
        return (
            <ProductCard 
                key={item.id}
                {...item} 
            />
        )
    });

    return(
        <div>
            <Header />
            <CategoryCards />
            <div className="container mx-auto mb-5">
                <h1 className="text-center text-4xl my-5">{props.categoryQuery}</h1>
                <div className="grid grid-cols-4">
                    {itemList}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { category: "chocolate" } },
            { params: { category: "cheese" } },
            { params: { category: "watches" } },
            { params: { category: "books" } },
            { params: { category: "knives" } },
        ],
        fallback: false
    };
}

const prisma = new PrismaClient();

export async function getStaticProps(context) {
    // fetch data for a single category

    const cat = context.params.category;

    let categoryQuery = "";

    if (cat == "knives") {
        categoryQuery = "Swiss Army Knives";
    } else {
        categoryQuery = cat.charAt(0).toUpperCase() + cat.slice(1);
    }


    const query = await prisma.category.findMany({
        where: {
            name: categoryQuery,
        },
        include: {
            items: {
                select: {
                    id: true,
                    name: true,
                    description: true,
                    image: true,
                    price: true,
                },
            },
        },
    });

    const catItems = query[0].items;

    const cleanedItems = catItems.map((item) => ({
        ...item,
        price: item.price.toNumber().toFixed(2)
    }));

    return { props: { cleanedItems, categoryQuery } };
}