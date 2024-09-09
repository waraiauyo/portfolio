"use client"

export default function MainWrapper({children}){
    return(
        <main className="flex flex-col h-screen px-6 gap-4">
            {children}
        </main>
    )
}