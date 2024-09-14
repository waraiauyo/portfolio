"use client"

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes"
import {Button} from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import SectionWrapper from "@/components/wrappers/section-wrapper";
import FormData from "form-data";
import axios from "axios";
import {useState} from "react";
import { toast } from "sonner";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const {theme} = useTheme();

    const messages = {
        required: "Ce champ est obligatoire",
        email: "Ce champ doit contenir une e-mail valide"
    }

    const formSchema = z.object({
        names: z.string({message: messages.required}).min(1, {message: messages.required}),
        email: z.string({message: messages.required}).email({message: messages.email}),
        subject: z.string({message: messages.required}).min(1, {message: messages.required}),
        content: z.string({message: messages.required}).min(1, {message: messages.required}),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    const handleSubmit = (values) => {
        setLoading(true);
        let fd = new FormData();

        toast("Action en cours...", {description: "Envoie de la requête vers api.valentinrnld.fr ...", action:{
                label: "Ok",
            }});

        fd.append("names", values.names);
        fd.append("email", values.email);
        fd.append("subject", values.subject);
        fd.append("content", values.content);

        axios.post("https://api.valentinrnld.fr/email/send", fd)
            .finally(() => setLoading(false))
            .then((response) => {
                toast("Bonne nouvelle !", {description: "Votre e-mail à bien été envoyé.", action:{
                        label: "Ok",
                    }});
            })
            .catch((error) => {
                toast("Mauvaise nouvelle..", {description: error.message, action:{
                        label: "Ok",
                    }});
            });
    }

    return (
        <SectionWrapper className={"pb-4"}>
            <Card>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        <CardHeader>
                            <CardTitle>Formulaire de contact</CardTitle>
                            <CardDescription>Si vous êtes intéressé par mes compétences.</CardDescription>
                        </CardHeader>
                        <CardContent className={"flex flex-col gap-4"}>
                            <FormField
                                control={form.control}
                                name="names"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Votre nom et prénom</FormLabel>
                                        <FormControl>
                                            <Input placeholder={"Berners-Lee Tim"} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Votre e-mail</FormLabel>
                                        <FormControl>
                                            <Input placeholder={"bernerslee.tim@cern.com"} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Sujet</FormLabel>
                                        <FormControl>
                                            <Input placeholder={"Recrutement stage..."} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Votre message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder={"Le contenu de votre message"} rows={10} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                        <CardFooter className={"flex basis-full justify-end"}>
                            <Button disabled={loading} type={"submit"} variant={theme.toString() === "light" ? "secondary" : ""}>Envoyer</Button>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </SectionWrapper>
    );
}