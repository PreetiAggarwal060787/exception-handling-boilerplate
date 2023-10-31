import React from "react"
import Child1 from "./Child1";
import Child2 from "./Child2";
function Parent() {
    return(
        <div>
            {/* Call Child1 and Child2 component */}
            <Child1 />
            <Child2 />
            {/* Such that Fallback1 component has to be rendered if props for Child1 is not provided */}
            {/* Display name in child1 when props is provided */}
            <Child1 name="Charlie" />
            {/* Such that Fallback2 component has to be rendered if props for Child2 is not provided */}
            {/* Display locality in child2 when props is provided */}
            <Child2 locality="Bengaluru" />
        </div>
    )
}

export default Parent;