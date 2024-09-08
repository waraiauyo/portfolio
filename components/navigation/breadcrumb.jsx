"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb(){
    const pathname = usePathname();
    const urlLocations = pathname.split("/").slice(1);

    return(
        <div className="flex">
            {
                urlLocations.map((location) => {
                    return(
                        <Link href={`/${location}`} className="hover:underline">/{location}</Link>
                    );
                })
            }
        </div>
    )
}