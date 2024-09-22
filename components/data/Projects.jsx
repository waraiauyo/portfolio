"use client"

import Project from "@/components/cards/project";

export default function Projects({data, error}){
    if (data) {
        return(
            data.map((project, i) => {
                return <Project key={i} project={project}/>;
            })
        );
    } else if (error) return `> erreur: ${error.message}`;
    else return "> requête vers api.valentinrnld.fr ...";
}