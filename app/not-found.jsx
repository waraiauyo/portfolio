"use client"

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SectionWrapper from "@/components/wrappers/section-wrapper";

export default function Error(){
    const [mount, setMount] = useState(false);
    const pathname = usePathname().slice(1);

    useEffect(() => {
        setMount(true);
    });

    return(
        <SectionWrapper className="flex flex-col">
            <p>{">"} Request failed with status code 404</p>
            <p>Module "{pathname}" not found.</p>
            <p>Catch at : {mount ? new Date().toLocaleString() : "fetching..."}</p>
        </SectionWrapper>
    );
}