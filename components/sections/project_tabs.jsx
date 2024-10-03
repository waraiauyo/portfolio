"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Markdown from "react-markdown";
import Link from "next/link";
import Video from 'next-video';

export default function ProjectTabs({project}) {
    const content = JSON.parse(project.content);

    return(
        <Tabs defaultValue={content.tabs[0].id}>
            <TabsList>
                {
                    (content.tabs).map((tab, i) => {
                        return (
                            <TabsTrigger key={i} value={tab.id}>{tab.text}</TabsTrigger>
                        );
                    })
                }
            </TabsList>
            {
                (content.p).map((p, i) => {
                    return (
                        <TabsContent key={i} value={p.tab}>
                            <h2 className={"font-black text-3xl"}>{p.title}</h2>
                            <Markdown>{p.text}</Markdown>
                            {p.techs ? (p.techs).map((tech, i) => {
                                return(
                                    <div className={" lex flex-col"}>
                                        <Link key={i} href={tech.href} className={"hover:underline"}>{"\- " + tech.name}</Link>
                                    </div>
                                );
                            }): null}
                            {p.videos ? (p.videos).map((video, i) => {
                                return(
                                    <div className={"w-2/3"}>
                                        <Video src={video.src} />
                                        <p>{video.description}</p>
                                    </div>
                                );
                            }): null}
                        </TabsContent>
                    );
                })
            }
        </Tabs>
    )
}