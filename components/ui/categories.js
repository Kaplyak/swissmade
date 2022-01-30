import Card from './card';

export default function CategoryCards() {
    return(
        <div className="flex mb-10 mt-5 justify-center">
            <Card category={"chocolate"} bg={"chocobg"} />
            <Card category={"cheese"} bg={"cheesebg"} />
            <Card category={"books"} bg={"booksbg"} />
            <Card category={"watches"} bg={"watchesbg"} />
            <Card category={"knives"} bg={"knivesbg"} />
        </div>
    )
}