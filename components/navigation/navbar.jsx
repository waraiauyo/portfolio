"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {Button} from "@/components/ui/button";

export default function Navbar(){
    const router = useRouter();
    const pathname = usePathname();

    const items = [
        {name: "Projets", href: "/projects", disabled: false},
        {name: "Contact", href: "/contact", disabled: false},
        {name: "À propos", href: "/about", disabled: true},
        {name: "Ce portfolio", href: "/portfolio", disabled: true},
    ];

    return(
        <nav className="flex items-center mx-8 py-6 px-4 border-b-2 bg-background sticky top-0 z-10">
            <div className="basis-1/2">
                <h1 className="text-3xl font-bold select-none cursor-pointer w-fit" onClick={() => router.push("/")}>valentinrnld™</h1>
            </div>
            <div className="basis-1/2 flex justify-end gap-4 border-l-2 items-center pl-4">
                {
                    items.map((item, i) => {
                        return(
                            <Button disabled={item.disabled} key={i} variant={"ghost"} className={pathname === item.href ? "bg-border hover:bg-border hover:text-ice text-ice dark:text-background" : null}>
                                <Link href={item.href}>{item.name}</Link>
                            </Button>
                        );
                    })
                }
            </div>
        </nav>
    );
}