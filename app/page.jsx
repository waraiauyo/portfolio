"use client"

import Home from "@/pages/Home";
import {useTitle} from "react-use";

export default function index(){
    useTitle("Portfolio - Valentin A. | Accueil")

    return <Home/>;
}