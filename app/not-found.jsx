"use client"

import { useEffect, useState } from "react";

export default function Error(){
    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    })

    return(
        <section className="flex flex-col">
            <p>Error {">"} 404 </p>
            <p>Catch at : {mount ? new Date().toLocaleString() : "fetching..."}</p>
        </section>
    );
}