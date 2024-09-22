"use client"

import Project from "@/pages/Project";
import {useTitle} from "react-use";

export default function index({params}){
    const name = decodeURI(params.name);

    useTitle(`Portfolio - Valentin A. | Projet`)

    return <Project name={name}/>;
}