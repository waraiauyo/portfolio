"use client"

import Introducing from "@/components/sections/introducing";
import MainWrapper from "@/components/wrappers/main-wrapper";
import Skills from "@/components/sections/skills";
import ProjectsPreview from "@/components/sections/projects-preview";

export default function Home(){
    return(
        <MainWrapper>
            <Introducing/>
            <Skills/>
            <ProjectsPreview/>
        </MainWrapper>
    );
}