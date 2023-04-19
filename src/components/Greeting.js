import { useEffect } from "react";

function UserGreeting({name}) {
    return (
        <h1>Welcome, back {name}</h1>
    )
}

function GuestGreeting(){
    return(
        <h1>Please Sign up!</h1>
    )
}

function Greeting({islogin}){
    // if(islogin){
    //     return <UserGreeting name="LOL" />
    // }
    // return <GuestGreeting/>
    useEffect(()=> {
        console.log("Greeting Hello World")
    })

    return islogin ? <UserGreeting name="LOL" /> : <GuestGreeting />

    // condition ? true_express : false_express
}

export default Greeting;