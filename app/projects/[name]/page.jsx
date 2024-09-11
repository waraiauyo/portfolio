"use client"

import Project from "@/pages/Project";

export default function index({params}){
    const name = decodeURI(params.name);

    return <Project name={name}/>;
}