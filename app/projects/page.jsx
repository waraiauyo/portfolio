"use client"

import Project from "@/components/cards/project";
import MainWrapper from "@/components/wrappers/main-wrapper";
import SectionWrapper from "@/components/wrappers/section-wrapper";

export default function index(){
    return (
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