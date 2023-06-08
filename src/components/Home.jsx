import React from "react";

export default function Home() {
    React.useEffect(() => {
        console.log("home mounted");
    }, []);
    return (<h1>Home</h1>)
}