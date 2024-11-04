"use client"

import SectionWrapper from "@/components/wrappers/section-wrapper";
import axios from "axios";
import useSWR from "swr";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Projects from "@/components/data/Projects";

export default function ProjectsPreview() {
    const fetcher = (...args) => axios.get(...args)
        .then((response) => response.data);
    let { data, error } = useSWR("https://api.mmi.tools/get/projects", fetcher);

    return (
        <SectionWrapper>
            <h2 className={"text-2xl"}>Mes projets</h2>
            <div className={"flex gap-4 flex-wrap transition pb-8 items-center"}>
                <Projects data={data ? data.slice(0, 2) : null} error={error} />
                {data ?
                    <Button asChild className={"bg-black dark:bg-ice text-background dark:text-background hover:bg-black group"}>
                        <Link href={"/projects"}>Voir plus <p
                        className={"ml-2 group-hover:translate-x-1 text-xl group-active:translate-x-1.5 transition"}>→</p></Link>
                    </Button>
                    : null
                }
            </div>
        </SectionWrapper>
    );
}