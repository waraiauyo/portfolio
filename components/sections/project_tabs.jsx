"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Markdown from "react-markdown";

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
                                    <Markdown key={i}>{"\\- " + tech}</Markdown>
                                );
                            }): null}
                        </TabsContent>
                    );
                })
            }
        </Tabs>
    )
}