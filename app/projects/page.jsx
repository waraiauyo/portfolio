"use client"

import Projects from "@/pages/Projects";
import {useTitle} from "react-use";

export default function index() {
    useTitle("Portfolio - Valentin A. | Projets")

    return <Projects/>;
}
