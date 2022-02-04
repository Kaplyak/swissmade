import ProductCard from './productCard';

export default function Featured(props) {

    const items = props.items;
    
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard cartAdd={props.cartAdd} id={items[0].id} name={items[0].name} description={items[0].description} image={items[0].image} price={items[0].price} category={items[0].category} />
            <ProductCard cartAdd={props.cartAdd} id={items[1].id} name={items[1].name} description={items[1].description} image={items[1].image} price={items[1].price} category={items[1].category} />
            <ProductCard cartAdd={props.cartAdd} id={items[2].id} name={items[2].name} description={items[2].description} image={items[2].image} price={items[2].price} category={items[2].category} />
            <ProductCard cartAdd={props.cartAdd} id={items[3].id} name={items[3].name} description={items[3].description} image={items[3].image} price={items[3].price} category={items[3].category} />
            <ProductCard cartAdd={props.cartAdd} id={items[4].id} name={items[4].name} description={items[4].description} image={items[4].image} price={items[4].price} category={items[4].category} />
            <ProductCard cartAdd={props.cartAdd} id={items[5].id} name={items[5].name} description={items[5].description} image={items[5].image} price={items[5].price} category={items[5].category} />
            <ProductCard cartAdd={props.cartAdd} id={items[6].id} name={items[6].name} description={items[6].description} image={items[6].image} price={items[6].price} category={items[6].category} />
            <ProductCard cartAdd={props.cartAdd} id={items[7].id} name={items[7].name} description={items[7].description} image={items[7].image} price={items[7].price} category={items[7].category} />
            <ProductCard cartAdd={props.cartAdd} id={items[8].id} name={items[8].name} description={items[8].description} image={items[8].image} price={items[8].price} category={items[8].category} />
            <ProductCard cartAdd={props.cartAdd} id={items[9].id} name={items[9].name} description={items[9].description} image={items[9].image} price={items[9].price} category={items[9].category} />
            <ProductCard cartAdd={props.cartAdd} id={items[10].id} name={items[10].name} description={items[10].description} image={items[10].image} price={items[10].price} category={items[10].category} />
            <ProductCard cartAdd={props.cartAdd} id={items[11].id} name={items[11].name} description={items[11].description} image={items[11].image} price={items[11].price} category={items[11].category} />
        </div>
    )
}