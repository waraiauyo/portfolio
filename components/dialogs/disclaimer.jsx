"use client"

import { useLocalStorage} from "react-use";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog"
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";

export default function Disclaimer() {
    const [value, setValue] = useLocalStorage("firstjoin");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (value === undefined) setOpen(true);
    });

    return(
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogContent className={"border-2"}>
                <DialogHeader>
                    <DialogTitle>Bienvenue ! Mais petit disclaimer</DialogTitle>
                    <DialogDescription>
                        Ce portfolio est encore en cours de construction, il est donc encore incomplet et peut comprendre des erreurs... Merci d'en prendre considération !
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button onClick={() => { setOpen(false); setValue("true") }}>J'ai compris</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}