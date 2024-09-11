"use client"

import SectionWrapper from "@/components/wrappers/section-wrapper";
import axios from "axios";
import useSWR from "swr";

export default function Project({name}){
    const fetcher = (...args) => axios.get(...args)
        .then((response) => response.data);
    const { data, error } = useSWR(`https://api.valentinrnld.fr/get/project/${name}`, fetcher);

    return (
        <SectionWrapper>
            {
                data ? JSON.stringify(data)
                 : error ? `> erreur: ${error.message}` : `> requête vers api.valentinrnld.fr pour " ${name} " ...`
            }
        </SectionWrapper>
    );
};