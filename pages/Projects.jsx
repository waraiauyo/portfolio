"use client"

import SectionWrapper from "@/components/wrappers/section-wrapper";
import MainWrapper from "@/components/wrappers/main-wrapper";
import axios from "axios";
import useSWR from "swr";
import ProjectsData from "@/components/data/Projects";

export default function Projects() {
    const fetcher = (...args) => axios.get(...args)
        .then((response) => response.data);
    const { data, error } = useSWR("https://api.mmi.tools/get/projects", fetcher);

    return(
        <MainWrapper>
            <SectionWrapper className={"flex gap-4 flex-wrap transition"}>
                <ProjectsData data={data} error={error} />
            </SectionWrapper>
        </MainWrapper>
    );
}