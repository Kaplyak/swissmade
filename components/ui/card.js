import Link from "next/link"

export default function Card(props) {
    return(
        <Link href={`/${props.category}`}>
            <div className={`flex items-end w-48 h-64 mx-5 ${props.bg} bg-cover shadow-lg rounded cursor-pointer cat`}>
                <p className="text-xl uppercase ml-1 text-white">{props.category}</p>
            </div>
        </Link>
    )
}