"use client"

import SectionWrapper from "@/components/wrappers/section-wrapper";
import Project from "@/components/cards/project";
import MainWrapper from "@/components/wrappers/main-wrapper";
import axios from "axios";
import {useEffect, useState} from "react";

export default function Projects() {
    const [projects, setProjects] = useState();

    useEffect( ()=>{
        axios.get("https://api.valentinrnld.fr/get/projects/")
            .then((response) => {
                setProjects(response.data);
            });
    });

    console.log(projects);

    return(
        <MainWrapper>
            <SectionWrapper className={"flex gap-4 flex-wrap transition"}>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </SectionWrapper>
        </MainWrapper>
    );
}