import Card from './card';

export default function CategoryCards() {
    return(
        <div className="mb-10 mt-5 justify-center hidden lg:flex">
            <Card category={"chocolate"} bg={"chocobg"} />
            <Card category={"cheese"} bg={"cheesebg"} />
            <Card category={"books"} bg={"booksbg"} />
            <Card category={"watches"} bg={"watchesbg"} />
            <Card category={"knives"} bg={"knivesbg"} />
        </div>
    )
}