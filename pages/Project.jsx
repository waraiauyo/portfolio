"use client"

import SectionWrapper from "@/components/wrappers/section-wrapper";
import axios from "axios";
import useSWR from "swr";
import ProjectTabs from "@/components/sections/project_tabs";

export default function Project({name}){
    const fetcher = (...args) => axios.get(...args)
        .then((response) => response.data);
    const { data, error } = useSWR(`https://api.mmi.tools/get/project/${name}`, fetcher);

    return (
        <SectionWrapper>
            {
                data ? <ProjectTabs project={data}/>
                 : error ? `> erreur: ${error.message}` : `> requête vers l'api pour " ${name} " ...`
            }
        </SectionWrapper>
    );
};