"use client"

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Error(){
    const [mount, setMount] = useState(false);
    const pathname = usePathname().slice(1);

    useEffect(() => {
        setMount(true);
    });

    return(
        <section className="flex flex-col">
            <p>Error {">"} 404</p>
            <p>Module "{pathname}" not found.</p>
            <p>Catch at : {mount ? new Date().toLocaleString() : "fetching..."}</p>
        </section>
    );
}