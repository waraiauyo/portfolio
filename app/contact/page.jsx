"use client"

import Contact from "@/pages/Contact";
import {useTitle} from "react-use";

export default function index(){
    useTitle("Portfolio - Valentin A. | Contact")

    return <Contact/>;
}