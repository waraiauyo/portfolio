"use client"

import SectionWrapper from "@/components/wrappers/section-wrapper";
import axios from "axios";
import useSWR from "swr";
import ProjectTabs from "@/components/sections/project_tabs";

export default function Project({name, setTitleProjectName}){
    const fetcher = (...args) => axios.get(...args)
        .then((response) => response.data);
    const { data, error } = useSWR(`https://api.valentinrnld.fr/get/project/${name}`, fetcher);

    setTitleProjectName(data ? data.display_name : name);

    return (
        <SectionWrapper>
            {
                data ? <ProjectTabs project={data}/>
                 : error ? `> erreur: ${error.message}` : `> requête vers api.valentinrnld.fr pour " ${name} " ...`
            }
        </SectionWrapper>
    );
};