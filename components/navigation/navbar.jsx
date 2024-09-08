"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar(){
    const router = useRouter();
    const pathname = usePathname();

    const items = [
        {name: "Projets", href: "/projects"},
        {name: "Contact", href: "/contact"}
    ];

    return(
        <nav className="flex items-center py-6 px-4 border-b-2 bg-background">
            <div className="basis-1/3 ">
                <h1 className="text-3xl font-bold select-none cursor-pointer w-fit" onClick={() => router.push("/")}>Valentin Arnould</h1>
            </div>
            <div className="basis-1/3 flex gap-4 justify-center border-x-2">
                {
                    items.map((item) => {
                        return(
                            <Link key={item.name} href={item.href} className={"px-4 py-2 transition rounded-[1rem] hover:bg- " + (pathname === item.href ? "bg-border hover:bg-border text-background" : null)}>{item.name}</Link>
                        );
                    })
                }
            </div>
            <div className="basis-1/3 flex justify-end"></div>
        </nav>
    );
}