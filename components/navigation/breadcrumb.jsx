"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb(){
    const pathname = usePathname();
    const locations = pathname.split("/").slice(1);

    return(
        <div className="mx-8 flex">
            {
                locations.map((location, i) => {
                    location = decodeURI(location);
                    return(
                        <Link key={i} href={`/${locations.slice(0, i + 1).map((location) => {
                            return `${location}/`;
                        }).join("")}`} className="hover:underline">/{location}</Link>
                    );
                })
            }
        </div>
    );
}