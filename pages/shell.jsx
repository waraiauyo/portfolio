"use client"
import { useEffect, useState } from "react";
import { useKey } from "react-use";

export default function Shell(){
    const [isMount, setIsMount] = useState(false);
    const [date, setDate] = useState();

    const [i, setI] = useState(null);
    var [choices, setChoices] = useState([
         {id: 1, name: "test1"},
         {id: 2, name: "test2"}
    ]);

    const increment = () => {
        if (i <= 2) setI(i => ++i);
    };
    const decrement = () => {
        if (i <= choices.length) setI((i) => --i);
    };

    useKey('ArrowRight', increment)
    useKey('ArrowLeft', decrement);

    useEffect(() => {
        setIsMount(true);
        setDate(new Date());

        return () => date;
    }, [date]);

    console.log(i, (i <= choices.length))

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