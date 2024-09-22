"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Project({key, project}) {
    return(
        <Link key={key} href={`/projects/${project.name}`}>
            <Card className={"w-96 h-fit border-2 group cursor-pointer select-none hover:bg-accent transition"}>
                <CardHeader>
                    <CardTitle className={"flex gap-4"}><p className={"group-hover:translate-x-2 group-active:translate-x-2.5 transition"}>→</p>{project.display_name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Type: {project.type}</p>
                    <p>Date: {project.date}</p>
                </CardContent>
                <CardFooter className={"flex"}>
                    <p className={"basis-1/2"}>{project.is_school ? "Projet scolaire" : "Projet personnel"}</p>
                    <p className={"flex basis-1/2 justify-end"}>{project.size}kb</p>
                </CardFooter>
            </Card>
        </Link>
    );
}