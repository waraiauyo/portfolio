"use client"

import Contact from "@/pages/Contact";
import {useFavicon, useTitle} from "react-use";

export default function index(){
    useTitle("Portfolio - Valentin A. | Contact")
    useFavicon("https://api.valentinrnld.fr/file/favicon/");

    return <Contact/>;
}