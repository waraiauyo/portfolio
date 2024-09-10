"use client"

export default function MainWrapper({children}){
    return(
        <main className="flex flex-col h-screen gap-6">
            {children}
        </main>
    )
}