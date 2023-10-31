import Fallback from "./FallBackChild2"

export default function Child2({locality}) {
    // Implement Try-Catch block 
    // thus Fallback2 component is rendered when error exists in Child2 component
    // Else renders locality
    return(
        <div>
            <h1>In locality: {locality.toUpperCase()}</h1>
        </div>
    )
}