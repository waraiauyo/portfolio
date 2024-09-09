"use client"

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Download } from "lucide-react";
import useDownloader from "react-use-downloader";

export default function Introducing(){
    const { size, elapsed, percentage, download, cancel, error, isInProgress } = useDownloader();

    const fileUrl = "https://upload.wikimedia.org/wikipedia/commons/transcoded/3/38/%E3%80%90i%E2%98%86Ris_%E7%A7%8B%E3%81%AEBBQ%E7%B7%A8%E5%A7%8B%E5%8B%95%E3%80%91%E7%AC%AC1%E5%BC%BE%EF%BC%9A%E8%8A%B9%E6%BE%A4%E5%84%AA%E3%80%81%E3%81%95%E3%82%93%E3%81%BE%E3%82%92%E3%81%95%E3%81%B0%E3%81%8F%E3%80%82%E3%80%8A%E3%82%82%E3%81%AF%E3%82%84%E3%83%97%E3%83%AD%E3%80%8B.webm/%E3%80%90i%E2%98%86Ris_%E7%A7%8B%E3%81%AEBBQ%E7%B7%A8%E5%A7%8B%E5%8B%95%E3%80%91%E7%AC%AC1%E5%BC%BE%EF%BC%9A%E8%8A%B9%E6%BE%A4%E5%84%AA%E3%80%81%E3%81%95%E3%82%93%E3%81%BE%E3%82%92%E3%81%95%E3%81%B0%E3%81%8F%E3%80%82%E3%80%8A%E3%82%82%E3%81%AF%E3%82%84%E3%83%97%E3%83%AD%E3%80%8B.webm.720p.vp9.webm"
    const filename = 'beautiful-carpathia.jpg';

    const [typeText] = useTypewriter({
        words: ["PHP", "NextJS", "Laravel", "Back"],
        loop: 0,
        typeSpeed: 100,
        delaySpeed: 2500
    });

    return(
        <section className="p-10 flex">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <p>Salut ! Je suis</p>
                    <h2 className="text-7xl font-black">Valentin</h2>
                    <p className="text-2xl">Actuellement étudiant en 2ème année de BUT MMI.</p>
                    <p className="text-xl flex gap-3">Future développeur {typeText}<Cursor cursorStyle="|"/></p>
                </div>
                <div className="flex gap-4">
                    <Button>Me contacter</Button>
                    <Button onClick={() => download(fileUrl, "mescouilles.webm")} variant="secondary">Mon CV <Download size={18} className="ml-2"/></Button>
                </div>
                <Progress value={percentage} max={100}></Progress>
            </div>
            <div></div>
        </section>
    );
}