import Link from "next/link"

export default function ViewDetails(props) {
    return(
        <Link href={`/product/${props.id}`} >
            <button className="text-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-3">
                View Details
            </button>
        </Link>
    )
}