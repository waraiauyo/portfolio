"use client"

import SectionWrapper from "@/components/wrappers/section-wrapper";
import axios from "axios";
import useSWR from "swr";
import Project from "@/components/cards/project";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export default function ProjectsPreview() {
    const {theme} = useTheme();
    const [mount, setMount] = useState(false);

    useEffect(() => {setMount(true);});

    const fetcher = (...args) => axios.get(...args)
        .then((response) => response.data);
    let { data, error } = useSWR("https://api.valentinrnld.fr/get/projects", fetcher);

    data = data ? Array.from(data).slice(0, 2) : undefined;

    return (
        <SectionWrapper>
            <h2 className={"text-2xl"}>Mes projets</h2>
            <div className={"flex gap-4 flex-wrap transition pb-8 items-center"}>
                {
                    data ? data.map((project, i) => {
                        return(
                            <Project key={i} project={project}/>
                        );
                    }) : error ? `> erreur: ${error.message}` : "> requête vers api.valentinrnld.fr ..."
                }
                {
                    data ?
                        <Button asChild className={"bg-black dark:bg-ice text-background dark:text-background hover:bg-black group"}>
                            <Link href={"/projects"}>Voir plus <p
                                className={"ml-2 group-hover:translate-x-1 text-xl group-active:translate-x-1.5 transition"}>→</p></Link>
                        </Button> : null
                }
            </div>
        </SectionWrapper>
    );
}