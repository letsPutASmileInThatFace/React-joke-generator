import { useState, useEffect } from "react";


function Joke(){

    const [joke, setJoke] = useState("");

    async function fethAndSetJoke() {
        try {
            const res = await fetch("https://v2.jokeapi.dev/joke/Any");
            const toJson = await res.json();
            setJoke(toJson.setup + " => " + toJson.delivery);
        }catch(err) {
            console.error(err)
        }
    } 

    useEffect(()=>{
        fethAndSetJoke();
    }, []);


    return(
        <>
            <div className="joke-container">
                <h1>Joke Generator</h1>
                <button 
                        onClick={fethAndSetJoke}
                        className="joke-button">
                    Click for a Joke
                </button>
                <p className="joke-display">
                    {joke}
                </p>
            </div>
        </>
    )
}

export default Joke;