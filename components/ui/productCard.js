import ViewDetails from "./viewDetails";
import Image from "next/image";

export default function ProductCard(props) {
    return(
        <div className="flex flex-col justify-center items-center h-96 m-2 border-2 rounded-xl p-3">
            <div className="flex flex-col">
                <div className="relative flex justify-center w-xl h-36">
                    <Image src={`${props.image}`} layout='fill' objectFit='contain' />
                </div>
                <div className="font-karla400 text-center mt-2">
                    <h3>{props.name}</h3>
                </div>
                <div className="price mt-1">
                    <p className="font-karla400 font-bold text-center">{props.price} CHF</p>
                </div>             
            </div>
            <div>
                <ViewDetails id={props.id} />
            </div>   
        </div>
    )
}