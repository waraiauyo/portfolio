"use client"

import Project from "@/pages/Project";
import {useFavicon, useTitle} from "react-use";
import {useState} from "react";

export default function index({params}){
    const name = decodeURI(params.name);

    useTitle(`Portfolio - Valentin A. | Projet`)
    useFavicon("https://api.valentinrnld.fr/file/favicon/");

    return <Project name={name}/>;
}