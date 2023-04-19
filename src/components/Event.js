export function FormSubmit(){
    const handleClick = () =>{
        console.log("Hello World")
    }
    function otherhandleClick(){
        alert("Hashaa")
    }
    return (
        <>
        <h1>Welcome</h1>
        
        <button onClick={otherhandleClick}>Click other me </button>

        <button onClick={handleClick}>Click other me1 </button>

        <button onClick={() => alert(("Hello World hashaa"))}>Click Me</button>
        </>
    )
}

