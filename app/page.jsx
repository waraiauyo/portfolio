"use client"

import Home from "@/pages/Home";
import {useFavicon, useTitle} from "react-use";

export default function index(){
    useTitle("Portfolio - Valentin A. | Accueil")
    useFavicon("https://api.valentinrnld.fr/file/favicon/");

    return <Home/>;
}