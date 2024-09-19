"use client"

import Project from "@/pages/Project";
import {useFavicon, useTitle} from "react-use";
import {useState} from "react";

export default function index({params}){
    const name = decodeURI(params.name);
    const [titleProjectName, setTitleProjectName] = useState(name);

    useTitle(`Portfolio - Valentin A. | ${titleProjectName}`)
    useFavicon("https://api.valentinrnld.fr/file/favicon/");

    return <Project name={name} setTitleProjectName={setTitleProjectName}/>;
}