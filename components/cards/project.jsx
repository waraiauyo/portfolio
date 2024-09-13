"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {useRouter} from "next/navigation";

export default function Project({key, project}) {
    const router = useRouter();

    return(
        <Card key={key} onClick={() => router.push(`/projects/${(project.name).toLowerCase()}`)} className={"w-96 h-fit border-2 group cursor-pointer select-none hover:bg-accent transition"}>
            <CardHeader>
                <CardTitle className={"flex gap-4"}><p className={"group-hover:translate-x-2 group-active:translate-x-2.5 transition"}>→</p>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Type: {project.type}</p>
                <p>Date: {project.date}</p>
            </CardContent>
            <CardFooter className={"flex"}>
                <p className={"flex basis-1/2"}>{project.is_school ? "Projet scolaire" : "Projet personnel"}</p>
                <p className={"flex basis-1/2 justify-end"}>{project.size}kb</p>
            </CardFooter>
        </Card>
    );
}