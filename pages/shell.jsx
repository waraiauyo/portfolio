"use client"
import { useEffect, useState } from "react";
import { useKey } from "react-use";

export default function Shell(){
    const [isMount, setIsMount] = useState(false);
    const [date, setDate] = useState();

    const [i, setI] = useState(null);
    var [choices, setChoices] = useState([
         {id: 1, name: "Accéder au portfolio"},
         {id: 2, name: "test2"},
         {id: 3, name: "test3"},
    ]);

    const increment = () => {
        setI((i) => i < choices.length ? ++i : i);
    };
    const decrement = () => {
        setI((i) => i > 1 ? --i : i);
    };

    useKey('ArrowRight', increment);
    useKey('ArrowLeft', decrement);

    useEffect(() => {
        setIsMount(true);
        setDate(new Date());

        return () => date;
    }, [date]);

    return(
        <div className="bg-black h-screen text-white font-mono text-sm">
            {!isMount ? <p>Lecture...</p> : null}
            {isMount ? 
            <>
                <p>RINTARO-OS (RTO/rtoos v0.1.0-89-generic x86_64)</p>
                <p>Version 3.14 Prod (C)Copyright V.A 2005</p>
                <p>Bios Date {date.toUTCString()}</p>
                <p>{i} {}</p>
                {choices.map((choice) => {
                    return(
                        <p className={choice.id === i ? "text-black bg-white" : null}>{choice.name}</p>
                    );
                })}
            </>
            : null
            }
        </div>
    );
}