"use client"

import Project from "@/pages/Projects";
import {useFavicon, useTitle} from "react-use";

export default function index(){
    useTitle("Portfolio - Valentin A. | Projets")
    useFavicon("https://api.valentinrnld.fr/file/favicon/");

    return <Project/>;
}