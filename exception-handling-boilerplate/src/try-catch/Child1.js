export default function Child1({name}) {
    return(
        // Implement Try-Catch block 
        // thus Fallback1 component is rendered when error exists in Child1 component
        // Else renders name of user
        <div>
            <h1>Name of user: {name.toUpperCase()}</h1>
        </div>
    )
}