import ViewDetails from "./viewDetails"

export default function ProductCard(props) {
    return(
        <div className="flex justify-center items-center h-96 m-2 border-2 rounded-xl p-3">
            <div className="flex flex-col">
                <div className="flex justify-center max-w-xl max-h-36">
                    <img src={`${props.image}`} className="max-h-full" />
                </div>
                <div className="text-center mt-3">
                    <h3>{props.name}</h3>
                </div>
                <div className="price mt-3">
                    <p className="text-center">{props.price} CHF</p>
                </div>
                <ViewDetails id={props.id} />
            </div>
        </div>
    )
}