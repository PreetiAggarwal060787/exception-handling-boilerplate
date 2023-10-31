import React from "react"
import Fallback2 from "./Fallback2"
export default function Child2({locality}) {
    try {
        return(
            <div>
                <h1>In locality: {locality.toUpperCase()}</h1>
            </div>
        )
    } catch(error) {
        return <Fallback2 error={error}/>
    }
}