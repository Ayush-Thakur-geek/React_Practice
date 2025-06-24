export default function Btn() {

    let clickHandler = () => {
        console.log("clicked")
    }

    return (
        <>
            <button onClick={clickHandler}>Click me</button>
        </>
    );
}