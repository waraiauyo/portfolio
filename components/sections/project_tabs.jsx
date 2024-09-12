"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProjectTabs({project}) {
    const content = JSON.parse(project.content);

    console.log(content.tabs[0]) // FAUT TROUVER LE PREMIER POUR LE DEFUALT ACTIVE KEY

    return(
        <Tabs defaultActiveKey={content.tabs[0]}>
            <TabsList>
                {
                    (content.tabs).map((tab) => {
                        return (
                            <TabsTrigger value={tab}>{tab}</TabsTrigger>
                        );
                    })
                }
            </TabsList>
            {
                (content.p).map((content) => {
                    return (
                        <TabsContent value={content.tab}>
                            <h2 className={"font-black text-3xl"}>{content.title}</h2>
                            <h3>{content.text}</h3>
                        </TabsContent>
                    );
                })
            }
        </Tabs>
    )
}