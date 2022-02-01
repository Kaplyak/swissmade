const { PrismaClient } = require('@prisma/client');
const fs = require('fs');


const prisma = new PrismaClient()
async function getAllItems() {
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

    const cleanedItems = items.map((item) => ({
        ...item,
        price: item.price.toNumber().toFixed(2)
    }));

    return cleanedItems;
}

async function writeCache() {
    const allItems = await getAllItems();

    const fileContents = `export const items = ${JSON.stringify(allItems)}`

    // if cache directory exists, ok else create it
    try {
        fs.readdirSync('cache');
    }
    catch (e) {
        fs.mkdirSync('cache');
    }

    // writing to the cache/data.js file
    fs.writeFile('cache/data.js', fileContents, function (err) { 
        if (err) return console.log(err);
        console.log("Items cached.");
    })
}

writeCache();

/*
const allItems = await getAllItems();
console.log(allItems);

// here we created the contents of the cache file
// const fileContents = `export const items = ${JSON.stringify(allItems)}`
*/

/*
// if cache directory exists, ok else create it
try {
    fs.readdirSync('cache');
}
catch (e) {
    fs.mkdirSync('cache');
}
*/
    
/*
// writing to the cache/data.js file
fs.writeFile('cache/data.js', fileContents, function (err) { 
    if (err) return console.log(err);
    console.log("Items cached.");
})
*/