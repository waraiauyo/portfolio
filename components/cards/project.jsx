"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Project() {
    return(
        <Card className={"w-96 h-fit border-2 group cursor-pointer select-none hover:bg-accent transition"}>
            <CardHeader>
                <CardTitle className={"flex gap-4"}><p className={"group-hover:translate-x-2 group-active:translate-x-2.5 transition"}>→</p> Projet n°1</CardTitle>
                <CardDescription>Petite description du projet lorem atchum ✦</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Type: Dev-Back</p>
                <p>Date: 10/12/2000</p>
            </CardContent>
            <CardFooter>
                <p>Projet scolaire</p>
            </CardFooter>
        </Card>
    );
}