"use client"

import Projects from "@/pages/Projects";
import {useFavicon, useTitle} from "react-use";

export default function index() {
    useTitle("Portfolio - Valentin A. | Projets")
    useFavicon("https://api.valentinrnld.fr/file/favicon/");

    return <Projects/>;
}
