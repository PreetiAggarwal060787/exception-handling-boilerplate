import React from "react"
import Fallback1 from "./Fallback1"

export default function Child1({name}) {
    try {
        return(
            <div>
                <h1>Name of User: {name.toUpperCase()}</h1>
            </div>
        )
    } catch(error) {
        return <Fallback1 error={error}/>
    }
}