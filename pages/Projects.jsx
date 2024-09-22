"use client"

import SectionWrapper from "@/components/wrappers/section-wrapper";
import Project from "@/components/cards/project";
import MainWrapper from "@/components/wrappers/main-wrapper";
import axios from "axios";
import useSWR from "swr";

export default function Projects() {
    const fetcher = (...args) => axios.get(...args)
        .then((response) => response.data);
    const { data, error } = useSWR("https://api.valentinrnld.fr/get/projects", fetcher);

    //OPTIMISER CETTE PAGE EN FAISANT UN COMPOSANT DANS ./section/...

    return(
        <MainWrapper>
            <SectionWrapper className={"flex gap-4 flex-wrap transition"}>
                {
                    data ? data.map((project, i) => {
                        return(
                            <Project key={i} project={project}/>
                        )
                    }) : error ? `> erreur: ${error.message}` : "> requête vers api.valentinrnld.fr ..."
                }
            </SectionWrapper>
        </MainWrapper>
    );
}