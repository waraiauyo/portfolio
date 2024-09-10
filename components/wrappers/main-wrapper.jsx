"use client"

export default function MainWrapper({children}){
    return(
        <>
            <main
                className="md:flex flex-col gap-6 hidden">
                {children}
            </main>
            <div className={"md:hidden flex h-screen justify-center items-center p-8"}>
                <p className={"text-center"}>Pour une meilleur expérience, il est préférable de naviguer sur ce site avec un plus grand écran.</p>
            </div>
        </>

    )
}