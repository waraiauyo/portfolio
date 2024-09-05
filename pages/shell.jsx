"use client"
import { useEffect, useState } from "react";

export default function Shell(){
    const [isMount, setIsMount] = useState(false);
    const [date, setDate] = useState();


    useEffect(() => {
        setIsMount(true);
        setDate(new Date());

        return () => date;
    }, [date]);

    return(
        <div className="bg-black h-screen text-white font-mono text-sm">
            {!isMount ? <p>Lecture...</p> : null}
            {isMount ? 
            <p>{date.toUTCString()}</p>
            : null
            }
        </div>
    );
}