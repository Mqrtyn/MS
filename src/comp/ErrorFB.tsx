//import React from "react";

export default function ErrorFB({error}: {error: Error}){
    return(
        <div>Error: <pre>{error.message}, {error.stack}</pre></div>
    )
}
