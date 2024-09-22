"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {Button} from "@/components/ui/button";
import useSWR from "swr";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function Navbar(){
    const router = useRouter();
    const pathname = usePathname();

    const fetcher = (...args) => axios.get(...args, {headers: `Authorization: Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`})
        .then((response) => response.data);
    const { data, error } = useSWR("https://api.github.com/repos/LixagDev/portfolio", fetcher);

    const items = [
        {name: "Projets", href: "/projects"},
        {name: "Contact", href: "/contact"},
    ];

    return(
        <nav className="flex items-center mx-8 py-6 px-4 border-b-2 bg-background sticky top-0 z-10">
            <div className="basis-1/2">
                <h1 className="text-3xl font-bold select-none cursor-pointer w-fit" onClick={() => router.push("/")}>valentinrnld™</h1>
            </div>
            <div className="basis-1/2 flex justify-end gap-4 border-l-2 items-center pl-4">
                <TooltipProvider>
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                            <p className={"mr-auto select-none cursor-pointer"}>Dernière MAJ : {data ? new Date(data.pushed_at).toLocaleDateString() : "..."}</p>
                        </TooltipTrigger>
                        <TooltipContent side={"bottom"}>
                            <p>à {data ? new Date(data.pushed_at).toLocaleTimeString() : "..."}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                {
                    items.map((item, i) => {
                        return(
                            <Button key={i} variant={"ghost"} asChild className={pathname === item.href ? "bg-border hover:bg-border hover:text-ice text-ice dark:text-background" : null}>
                                <Link href={item.href} >{item.name}</Link>
                            </Button>
                        );
                    })
                }
            </div>
        </nav>
    );
}