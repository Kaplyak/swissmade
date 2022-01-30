import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PrismaClient, Prisma } from '@prisma/client';
import Header from '../components/common/header';
import CategoryCards from '../components/ui/categories';
import Featured from '../components/ui/featured';
import Footer from '../components/common/footer';

export default function Home(cleanedItems) {

  const [cart, setCart] = React.useState();

  function cartAdd(id) {
    console.log(id);
  }
  
  const featured_items = [
    cleanedItems.cleanedItems[23], cleanedItems.cleanedItems[8], cleanedItems.cleanedItems[12], cleanedItems.cleanedItems[27], 
    cleanedItems.cleanedItems[19], cleanedItems.cleanedItems[37], cleanedItems.cleanedItems[30], cleanedItems.cleanedItems[18], 
    cleanedItems.cleanedItems[35], cleanedItems.cleanedItems[32], cleanedItems.cleanedItems[0], cleanedItems.cleanedItems[14]
  ];
  

  console.log(cleanedItems.cleanedItems)

  return (
    <div>
      <Header />
      <CategoryCards />
      <div className="container mx-auto mb-5">
        <hr />
        <h2 className="text-center text-4xl my-5">Featured Swiss Products</h2>
        <Featured cartAdd={() => cartAdd(props.item.id)} items={featured_items} />
      </div>
      <Footer />
    </div>
  )
}

const prisma = new PrismaClient()
export async function getStaticProps() {
  // fetch the data
  const items = await prisma.item.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
      price: true,
      category: true
    }
  });
  // const allItems = await JSON.stringify(items);
  
  // console.log(data);

  const cleanedItems = items.map((item) => ({
    ...item,
    price: item.price.toNumber().toFixed(2)
  }));

  return { props: { cleanedItems } };
}

/*
$ npx prisma generate
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma

✔ Generated Prisma Client (3.8.1 | library) to ./node_modules/@prisma/client in 99ms
You can now start using Prisma Client in your code. Reference: https://pris.ly/d/client
```
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```
*/